import { DomainEvents } from "@/core/events/domain-events";
import type { EventHandler } from "@/core/events/event-handler";
import type { QuestionsRepository } from "@/domain/forum/application/repositories/questions-repository";
import { QuestionCommentCreatedEvent } from "@/domain/forum/enterprise/events/question-comment-created-event";
import type { SendNotificationUseCase } from "@/domain/notification/application/use-cases/send-notification";

export class OnQuestionCommentCreated implements EventHandler {
	constructor(
		private questionsRepository: QuestionsRepository,
		private sendNotification: SendNotificationUseCase,
	) {
		this.setupSubscriptions();
	}

	setupSubscriptions(): void {
		DomainEvents.register(
			this.sendNewCommentCommentNotification.bind(this),
			QuestionCommentCreatedEvent.name,
		);
	}

	private async sendNewCommentCommentNotification({
		questionComment,
	}: QuestionCommentCreatedEvent) {
		const question = await this.questionsRepository.findById(
			questionComment.questionId.toString(),
		);

		if (question) {
			await this.sendNotification.execute({
				recipientId: question.authorId.toString(),
				title: `New comment to "${question.title
					.substring(0, 40)
					.concat("...")}"`,
				content: question.excerpt,
			});
		}
	}
}

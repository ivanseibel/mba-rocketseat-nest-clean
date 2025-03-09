import { AggregateRoot } from "@/core/entities/aggregate-root";
import type { UniqueEntityID } from "@/core/entities/unique-entity-id";
import type { Optional } from "@/core/types/optional";
import { QuestionCommentCreatedEvent } from "../events/question-comment-created-event";
import type { CommentProps } from "./comment";

export interface QuestionCommentProps extends CommentProps {
	questionId: UniqueEntityID;
}

export class QuestionComment extends AggregateRoot<QuestionCommentProps> {
	get questionId() {
		return this.props.questionId;
	}

	get authorId() {
		return this.props.authorId;
	}

	get content() {
		return this.props.content;
	}

	get createdAt() {
		return this.props.createdAt;
	}

	get updatedAt() {
		return this.props.updatedAt;
	}

	static create(
		props: Optional<QuestionCommentProps, "createdAt">,
		id?: UniqueEntityID,
	) {
		const questionComment = new QuestionComment(
			{
				...props,
				createdAt: props.createdAt ?? new Date(),
			},
			id,
		);

		const isNewQuestionComment = !id;

		if (isNewQuestionComment) {
			questionComment.addDomainEvent(
				new QuestionCommentCreatedEvent(questionComment),
			);
		}

		return questionComment;
	}
}

import { AggregateRoot } from "@/core/entities/aggregate-root";
import type { UniqueEntityID } from "@/core/entities/unique-entity-id";
import type { Optional } from "@/core/types/optional";
import { AnswerCommentCreatedEvent } from "../events/answer-comment-created-event";
import type { CommentProps } from "./comment";

export interface AnswerCommentProps extends CommentProps {
	answerId: UniqueEntityID;
}

export class AnswerComment extends AggregateRoot<AnswerCommentProps> {
	get answerId() {
		return this.props.answerId;
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
		props: Optional<AnswerCommentProps, "createdAt">,
		id?: UniqueEntityID,
	) {
		const answerComment = new AnswerComment(
			{
				...props,
				createdAt: props.createdAt ?? new Date(),
			},
			id,
		);

		const isNewAnswerComment = !id;

		if (isNewAnswerComment) {
			answerComment.addDomainEvent(
				new AnswerCommentCreatedEvent(answerComment),
			);
		}

		return answerComment;
	}
}

import { AggregateRoot } from "@/core/entities/aggregate-root";
import type { UniqueEntityID } from "@/core/entities/unique-entity-id";

export interface CommentProps {
	authorId: UniqueEntityID;
	content: string;
	createdAt: Date;
	updatedAt?: Date;
}

export class Comment extends AggregateRoot<CommentProps> {
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

	private touch() {
		this.props.updatedAt = new Date();
	}

	set content(content: string) {
		this.props.content = content;
		this.touch();
	}
}

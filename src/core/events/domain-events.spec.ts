import { DomainEvents } from "@/core/events/domain-events";
import { vi } from "vitest";
import { AggregateRoot } from "../entities/aggregate-root";
import type { UniqueEntityID } from "../entities/unique-entity-id";
import type { DomainEvent } from "./domain-event";

class CustomAggregateCreated implements DomainEvent {
	public occurredAt: Date;
	private aggregate: CustomAggregate;
	constructor(aggregate: CustomAggregate) {
		this.aggregate = aggregate;
		this.occurredAt = new Date();
	}

	public getAggregateId(): UniqueEntityID {
		return this.aggregate.id;
	}
}

class CustomAggregate extends AggregateRoot<null> {
	static create() {
		const aggregate = new CustomAggregate(null);

		aggregate.addDomainEvent(new CustomAggregateCreated(aggregate));

		return aggregate;
	}
}

describe("domain events", () => {
	it("should be able to dispatch and listen to events", async () => {
		const callbackSpy = vi.fn();

		// Subscriber registered (listening to the "response created" event)
		DomainEvents.register(callbackSpy, CustomAggregateCreated.name);

		// Creating a response but WITHOUT saving to the database
		const aggregate = CustomAggregate.create();

		// Ensuring that the event was created but NOT dispatched
		expect(aggregate.domainEvents).toHaveLength(1);

		// Saving the response to the database and thus dispatching the event
		DomainEvents.dispatchEventsForAggregate(aggregate.id);

		// The subscriber hears the event and does what needs to be done with the data
		expect(callbackSpy).toHaveBeenCalled();

		expect(aggregate.domainEvents).toHaveLength(0);
	});
});

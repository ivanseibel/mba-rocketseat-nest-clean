import { compare, hash } from "bcryptjs";

import { HashComparer } from "@/domain/forum/application/cryptography/hash-comparer";
import { HashGenerator } from "@/domain/forum/application/cryptography/hash-generator";

export class BcryptHasher implements HashGenerator, HashComparer {
	private readonly BCRYPT_SALT_ROUNDS = 8;

	compare(plain: string, hash: string): Promise<boolean> {
		return compare(plain, hash);
	}

	hash(plain: string): Promise<string> {
		return hash(plain, this.BCRYPT_SALT_ROUNDS);
	}
}

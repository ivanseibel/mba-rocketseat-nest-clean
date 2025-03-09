/**
 * Make some property optional
 *
 * @example
 * ```typescript
 * type User = {
 *  id: string;
 *  name: string;
 *  email: string;
 * }
 *
 * Optional<User, 'id' | 'email'> // { id?: string; name: string; email?: string; }
 * ```
 */

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

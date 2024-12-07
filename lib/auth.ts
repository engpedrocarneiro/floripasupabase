import { createHash, randomBytes } from 'crypto';

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex');
  const hash = createHash('sha256')
    .update(password + salt)
    .digest('hex');
  return `${salt}:${hash}`;
}

export function verifyPassword(storedPassword: string, inputPassword: string): boolean {
  const [salt, hash] = storedPassword.split(':');
  const inputHash = createHash('sha256')
    .update(inputPassword + salt)
    .digest('hex');
  return hash === inputHash;
}
// tests/setup.ts
import '@testing-library/jest-dom';
import {vi} from 'vitest';

// Mock Firebase modules
vi.mock('firebase/auth', () => ({
    getAuth: vi.fn(() => ({})),
}));


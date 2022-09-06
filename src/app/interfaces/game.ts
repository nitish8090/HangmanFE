import { Timestamp } from "rxjs";

export interface Game {
    id: number,
    guess_made: number,
    started_at: Date,
    current_state: string,
    current_pos: string,
    guesses_remaining: number,
    is_guess_correct: boolean,
    guesses_made: string,
    answer: string
}

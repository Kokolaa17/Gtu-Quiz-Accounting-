export interface MultipleChoiceQuestion {
    id: number;
    prompt: string;
    options: string[];
    correct: number; // სწორი პასუხის ინდექსი (0, 1, 2, 3)
}

export interface CaseStudy {
    id: number;
  title: string;
  description: string;
  questionsAndAnswers: {
    question: string;
    answer: string;
  }[];
}

import { TOPIC1 } from './quiz-component/AcountantigTopics/Topic1';
import { TOPIC2 } from './quiz-component/AcountantigTopics/Topic2';
import { TOPIC3 } from './quiz-component/AcountantigTopics/Topic3';
import { TOPIC4 } from './quiz-component/AcountantigTopics/Topic4';
import { TOPIC5 } from './quiz-component/AcountantigTopics/Topic5';
import { TOPIC6 } from './quiz-component/AcountantigTopics/Topic6';
import { TOPIC7 } from './quiz-component/AcountantigTopics/Topic7';

export interface Question {
  prompt: string;
  options: string[];   
  correct: number;     
  explanation?: string;
}

export interface Topic {
  id: number;
  title: string;
  questions: Question[];
}

export const TOPICS: Topic[] = [
  { id: 1, title: 'თემა I. ბუღალტრული აღრიცხვის საგანი და მეთოდი', questions: TOPIC1 },
  { id: 2, title: 'თემა II. ბუღალტრული აღრიცხვის საერთაშორისო სტანდარტები', questions: TOPIC2 },
  { id: 3, title: 'თემა III. ფინანსური ანგარიშგება', questions: TOPIC3 },
  { id: 4, title: 'თემა IV. საწარმოთა ორგანიზაციულ-სამართლებრივი ფორმები', questions: TOPIC4 },
  { id: 5, title: 'თემა V. ბალანსირების პრინციპები', questions: TOPIC5 },
  { id: 6, title: 'თემა VI. ბუღალტრული აღრიცხვის ანგარიშთა სისტემა', questions: TOPIC6 },
  { id: 7, title: 'თემა VII. სამეურნეო ოპერაციების რეგისტრაცია და ორმაგი ჩაწერა', questions: TOPIC7 },
  { id: 8, title: 'ყველაფერი ერთად', questions: [ ...TOPIC1, ...TOPIC2, ...TOPIC3, ...TOPIC4, ...TOPIC5, ...TOPIC6, ...TOPIC7 ] },
];
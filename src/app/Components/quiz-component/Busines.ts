import type { Topic } from '../Question.data';
import { BIZ_TOPIC1, BIZ_TOPIC2, BIZ_TOPIC5, BIZ_TOPIC6, BIZ_TOPIC4, BIZ_TOPIC7, BIZ_OPEN_QUESTIONS, BIZ_CASES } from './BusinesTopics/Topic1';

// ბიზნესის საფუძვლები: თემები და კითხვები ემატება აქ.
export const BUSINESS_TOPICS: Topic[] = [
    { id: 1, title: 'თემა I. ბიზნესის არსი და მნიშვნელობა', questions: BIZ_TOPIC1 },
  { id: 2, title: 'თემა II. ბიზნესის გარემო და სახელმწიფო', questions: BIZ_TOPIC2 },
  { id: 4, title: 'თემა IV. ბიზნესის ორგანიზაციულ-სამართლებრივი ფორმები', questions: BIZ_TOPIC4 },
  { id: 5, title: 'თემა V. ბიზნესის დაფინანსების საშუალებები', questions: BIZ_TOPIC5 },
  { id: 6, title: 'თემა VI. ვენჩურული კაპიტალი', questions: BIZ_TOPIC6 },
  { id: 7, title: 'თემა VII. ბიზნესი და გადასახადები / ფასიანი ქაღალდები', questions: BIZ_TOPIC7 },
  { id: 8, title: 'ღია კითხვები', questions: BIZ_OPEN_QUESTIONS },
  { id: 9, title: 'კეის სტადები', questions: BIZ_CASES },
  { id: 10, title: 'ყველაფერი ერთად', questions: [ ...BIZ_TOPIC1, ...BIZ_TOPIC2, ...BIZ_TOPIC4, ...BIZ_TOPIC5, ...BIZ_TOPIC6, ...BIZ_TOPIC7, ...BIZ_OPEN_QUESTIONS, ...BIZ_CASES ] },
];
import { Topic, TOPICS } from '../Question.data';
import { BUSINESS_TOPICS } from './Busines';
import { FINANCE_TOPICS } from './Finance';



export interface Subject {
  id: string;
  title: string;
  topics: Topic[];
}

export const SUBJECTS: Subject[] = [
  { id: 'accounting', title: 'ბუღალტრული აღრიცხვის საფუძვლები', topics: TOPICS },
  { id: 'business',   title: 'ბიზნესის საფუძვლები',            topics: BUSINESS_TOPICS },
  { id: 'finance',    title: 'ფინანსების საფუძვლები',          topics: FINANCE_TOPICS }
];
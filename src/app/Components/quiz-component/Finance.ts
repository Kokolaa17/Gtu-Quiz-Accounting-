import type { Topic } from '../Question.data';
import {
  FIN_OPEN_QUESTIONS,
  FIN_TOPIC1,
  FIN_TOPIC10,
  FIN_TOPIC11,
  FIN_TOPIC12,
  FIN_TOPIC13,
  FIN_TOPIC14,
  FIN_TOPIC15,
  FIN_TOPIC2,
  FIN_TOPIC3,
  FIN_TOPIC4,
  FIN_TOPIC5,
  FIN_TOPIC6,
  FIN_TOPIC7,
  FIN_TOPIC8,
  FIN_TOPIC9
} from './FinanceTopics/Topic1';

export const FINANCE_TOPICS: Topic[] = [
  { id: 1, title: 'თემა 1. ფინანსების არსი და ფუნქციები', questions: FIN_TOPIC1 },
  { id: 2, title: 'თემა 2. საფინანსო სისტემა და ფინანსური ბაზარი', questions: FIN_TOPIC2 },
  { id: 3, title: 'თემა 3. ფინანსური პოლიტიკა და ფინანსური მექანიზმი', questions: FIN_TOPIC3 },
  { id: 4, title: 'თემა 4. ფინანსების მართვა და მისი სისტემა', questions: FIN_TOPIC4 },
  { id: 5, title: 'თემა 5. გადასახადები და საგადასახადო სისტემა', questions: FIN_TOPIC5 },
  { id: 6, title: 'თემა 6. ფინანსური კონტროლი და მისი ორგანიზაცია', questions: FIN_TOPIC6 },
  { id: 7, title: 'თემა 7. საბიუჯეტო მოწყობა, საბიუჯეტო სისტემა და საბიუჯეტო პროცესი', questions: FIN_TOPIC7 },
  { id: 8, title: 'თემა 8. სახელმწიფო კრედიტი, მისი ორგანიზაცია და მართვა', questions: FIN_TOPIC8 },
  { id: 9, title: 'თემა 9. სახელმწიფო სპეციალური ფონდები', questions: FIN_TOPIC9 },
  { id: 10, title: 'თემა 10. სამეწარმეო (კომერციული) ორგანიზაციების ფინანსები', questions: FIN_TOPIC10 },
  { id: 11, title: 'თემა 11. ფინანსური ბაზრის პროფესიონალურ მონაწილეთა ფინანსები', questions: FIN_TOPIC11 },
  { id: 12, title: 'თემა 12. არასამეწარმეო (არაკომერციული) ორგანიზაციების ფინანსები', questions: FIN_TOPIC12 },
  { id: 13, title: 'თემა 13. საოჯახო მეურნეობების (შინამეურნეობების) ფინანსები', questions: FIN_TOPIC13 },
  { id: 14, title: 'თემა 14. საერთაშორისო ფინანსები და ფინანსური პოლიტიკა', questions: FIN_TOPIC14 },
  { id: 15, title: 'თემა 15. საერთაშორისო საფინანსო ორგანიზაციები', questions: FIN_TOPIC15 },
  { id: 16, title: 'ღია კითხვები', questions: FIN_OPEN_QUESTIONS.slice(0, 19) },
  { id: 17, title: 'ყველაფერი ერთად', questions: [
      ...FIN_TOPIC1,
      ...FIN_TOPIC2,
      ...FIN_TOPIC3,
      ...FIN_TOPIC4,
      ...FIN_TOPIC5,
      ...FIN_TOPIC6,
      ...FIN_TOPIC7,
      ...FIN_TOPIC8,
      ...FIN_TOPIC9,
      ...FIN_TOPIC10,
      ...FIN_TOPIC11,
      ...FIN_TOPIC12,
      ...FIN_TOPIC13,
      ...FIN_TOPIC14,
      ...FIN_TOPIC15,
      ...FIN_OPEN_QUESTIONS.slice(0, 19)
    ]
  }
];

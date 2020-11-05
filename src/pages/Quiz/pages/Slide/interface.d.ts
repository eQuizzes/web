
export interface ISlidePage {
  slide?: ISlideQuiz | null;
  movQuizId: number;
  totalObject: number;
  handleGetCurrentObject: () => void;
}

export interface ISlideQuiz {
  numberSlide: number;
  slideQuizId: number;
  orderByQuiz: number;
  quizId: number;
  content: string;
  count: number;
}

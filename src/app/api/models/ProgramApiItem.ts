export interface ProgramApiItem {
  title: string;
  description: string;
  programType: string;
  images: {
    posterArt: Image
  };
  releaseYear: number;
}

export interface Image {
  url: string;
  width: number;
  height: number;
}

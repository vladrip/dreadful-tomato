import { ProgramType, programTypeOf } from "@apiModels/enums/ProgramType";
import { ProgramApiItem } from "@apiModels/ProgramApiItem";

export class ProgramItem {
  title: string;
  description: string;
  programType: ProgramType;
  posterUrl: string;
  releaseYear: number;

  static ofApiItem(apiItem: ProgramApiItem): ProgramItem {
    return {
      title: apiItem.title,
      description: apiItem.description,
      programType: programTypeOf(apiItem.programType),
      posterUrl: apiItem.images.posterArt.url,
      releaseYear: apiItem.releaseYear
    }
  }
}

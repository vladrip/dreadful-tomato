import { ProgramType } from "@apiModels/enums/ProgramType";

export interface ProgramListFilters {
    programType: ProgramType;
    query?: string;
    yearFrom?: number;
    yearTo?: number;
}

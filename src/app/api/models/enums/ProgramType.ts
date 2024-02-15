export enum ProgramType {
    MOVIES = 'MOVIES',
    SERIES = 'SERIES',
}

export const programTypeOf = (name: string): ProgramType => {
  return ProgramType[name.toUpperCase()];
}

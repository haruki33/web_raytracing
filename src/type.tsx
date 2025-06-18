export type FormInputData = {
  enviType: number
  N: number,
  tpX: number,
  tpY: number,
  tpZ: number,
  rpX: number,
  rpY: number,
  rpZ: number,
};


export type ResponseData = {
  points: [number, number, number][],
  surfsListIdxs: [number, number, number, number][],
  routes: [number, number, number][],
  tp: [number, number, number],
  rp: [number, number, number],
};

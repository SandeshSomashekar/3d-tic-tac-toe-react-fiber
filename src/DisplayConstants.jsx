export const DisplayConstants = {
    Empty: 0,
    Cube: 1,
    Sphere: 2,
}

export const DefaultGridData = [
    { pos: [-2, -1, 1], show: DisplayConstants.Empty },
    { pos: [-2, 1, 1], show: DisplayConstants.Empty },
    { pos: [-2, 3, 1], show: DisplayConstants.Empty },
    { pos: [0, -1, 1], show: DisplayConstants.Empty },
    { pos: [0, 1, 1], show: DisplayConstants.Empty },
    { pos: [0, 3, 1], show: DisplayConstants.Empty },
    { pos: [2, -1, 1], show: DisplayConstants.Empty },
    { pos: [2, 1, 1], show: DisplayConstants.Empty },
    { pos: [2, 3, 1], show: DisplayConstants.Empty }
];

export const WinningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

export default {DefaultGridData, DisplayConstants, WinningCombinations};
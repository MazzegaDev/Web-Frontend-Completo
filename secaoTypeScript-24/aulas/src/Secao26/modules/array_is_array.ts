//let arr: number[] | undefined;
let arr: number[] | undefined = [1, 2, 3];

if (Array.isArray(arr)) {
  arr?.map((x) => {
    console.log(x);
  });
}

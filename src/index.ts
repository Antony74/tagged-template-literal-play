const m1 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
];

const skull = [1, 2, 3];
const cup = [1, 2, 3];
const handle = [1, 2, 3];
const lip = [1, 2, 3];

const convexHull = (a: any) => a;

const meshOps = (...params: any[]) => {
    params.forEach((param) => {
        if (Array.isArray(param)) {
            console.log(JSON.stringify(param, null, 2));
        } else {
            console.log(param);
        }
    });
    return m1;
};

const prod = meshOps`${skull} - ${convexHull}(${cup} - ${handle} - ${lip}) + ${cup}`;

type Mesh = {
    vertices: [number, number, number][];
    faces: [number, number, number][];
};

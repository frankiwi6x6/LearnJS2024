export const challenges = [
    {
        id: 1,
        title: 'Reto 1: Sumar números',
        description: 'Crear una función que reciba dos números y devuelva su suma.',
        difficulty: 'Fácil',
        tests: [
            { args: [2, 3], expected: 5 },
            { args: [4, 7], expected: 11 },
            { args: [4, -7], expected: -3 },
            { args: ["hola", 7], expected: "hola7" },
        ]
    },
    {
        id: 2,
        title: 'Reto 2: Restar números',
        description: 'Crear una función que reciba dos números y devuelva su resta.',
        difficulty: 'Fácil',
        tests: [
            {
                title: 'Test 1',
                description: 'Debe devolver la resta de 2 números positivos',
                test: (func) => {
                    return func(2, 3) === -1;
                }
            },
            {
                title: 'Test 2',
                description: 'Debe devolver la resta de un número positivo y uno negativo',
                test: (func) => {
                    return func(-4, 7) === -11;
                }
            },
            // Otros tests...
        ]
    },
    {
        id: 3,
        title: 'Reto 3: Multiplicar números',
        description: 'Crear una función que reciba dos números y devuelva su multiplicación.',
        difficulty: 'Fácil',
        tests: [
            {
                title: 'Test 1',
                description: 'Debe devolver la multiplicación de 2 números positivos',


                test: (func) => {
                    return func(2, 3) === 6;
                }
            },
            {
                title: 'Test 2',
                description: 'Debe devolver la multiplicación de un número positivo y uno negativo',
                test: (func) => {
                    return func(-4, 7) === -28;
                }
            },
            // Otros tests...
        ]

    },
    {
        id: 4,
        title: 'Reto 4: Dividir números',
        description: 'Crear una función que reciba dos números y devuelva su división.',
        difficulty: 'Fácil',
        tests: [
            {
                title: 'Test 1',
                description: 'Debe devolver la división de 2 números positivos',
                test: (func) => {
                    return func(6, 3) === 2;
                }
            },
            {
                title: 'Test 2',
                description: 'Debe devolver la división de un número positivo y uno negativo',
                test: (func) => {
                    return func(-4, 2) === -2;
                }
            },
        ]
    },
    {
        id: 5,
        title: 'Reto 5: Sumar números pares',
        description: 'Crear una función que reciba un número y devuelva la suma de todos los números pares desde 0 hasta el número recibido.',
        difficulty: 'Fácil',
        tests: [
            {
                title: 'Test 1',
                description: 'Debe devolver la suma de los números pares desde 0 hasta 10',
                test: (func) => {
                    return func(10) === 30;
                }
            },
            {
                title: 'Test 2',
                description: 'Debe devolver la suma de los números pares desde 0 hasta 20',
                test: (func) => {
                    return func(20) === 110;
                }
            },
        ]
    }
];

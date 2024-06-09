export const dataNav=[
        {
            "title" : 'Crear',
            "img" : <ion-icon name="add-circle-outline"></ion-icon>,
            "position": 1
        },
        {
            "title" : 'Modificar',
            "img" : <ion-icon name="arrow-up-circle-outline"></ion-icon>,
            "position": 2
        },
        {
            "title" : 'Finalizados',
            "img" : <ion-icon name="caret-up-circle-outline"></ion-icon>,
            "position": 3
        },
        {
            "title" : 'Pendientes',
            "img" : <ion-icon name="help-circle-outline"></ion-icon>,
            "position": 4
        },
        {
            "title" : 'Aceptados',
            "img" : <ion-icon name="checkmark-circle-outline"></ion-icon>,
            "position": 5
        },
        {
            "title" : 'Rechazados',
            "img" : <ion-icon name="arrow-down-circle-outline"></ion-icon>,
            "position": 6
        }
];


export const dataNavTeacher=[
        {
            "title" : 'Pendientes',
            "img" : <ion-icon name="help-circle-outline"></ion-icon>,
            "position": 3
        },
        {
            "title" : 'Aceptados',
            "img" : <ion-icon name="checkmark-circle-outline"></ion-icon>,
            "position": 4
        },
        {
            "title" : 'Rechazados',
            "img" : <ion-icon name="arrow-down-circle-outline"></ion-icon>,
            "position": 5
        },
        {
            "title" : 'Finalizados',
            "img" : <ion-icon name="caret-up-circle-outline"></ion-icon>,
            "position": 6
        }
]
export const dataNavAvances=[
    {
        "title" : 'Crear Avance',
        "img" : <ion-icon name="add-circle-outline"></ion-icon>,
        "position": 1
    },
    {
        "title" : 'Modificar Avance',
        "img" : <ion-icon name="close-circle-outline"></ion-icon>,
        "position": 2
    },
    {
        "title" : 'Eliminar Avance',
        "img" : <ion-icon name="help-circle-outline"></ion-icon>,
        "position": 3
    }
]
export const dataNavProjectsConfig=[
    {
        "title" : 'Eliminar Proyecto',
        "img" : <ion-icon name="close-circle-outline"></ion-icon>,
        "position": 1
    },
    {
        "title" : 'Ver Proyecto',
        "img" : <ion-icon name="cloud-circle-outline"></ion-icon>,
        "position": 2
    }
]

export const handleChange = (text,maxLength,setMessage,setTitle,setMostrarDialogo) => {
        const newValue = text.current.value;
        if (newValue.length > maxLength) {
            setMessage('Esta a punto de exceder el valor minimo');
            setTitle('¡Fallo!');
            setMostrarDialogo(true);
            text.current.value = newValue.slice(0, maxLength);
        }
};
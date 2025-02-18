export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    estock:number;
    caracteristicas: string[];
    garantia: string
  }
  
  export const products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      estock: 10,
      caracteristicas: ["5G","Pantalla OLED","Almacenamiento de 128GB"],
      garantia:{
        periodo:"2 Años",
        tipo: "Fabricante"
      }
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      estock: 0,
      caracteristicas: ["5G","Pantalla OLED","Almacenamiento de 500GB"],
      garantia:{
        periodo:"3 Años",
        tipo: "Fabricante"
      }
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: '',
      estock: 2,
      caracteristicas: [],
      garantia:{
        periodo:"2 Años",
        tipo: "Fabricante"
      }
    }
  ];
using System;

namespace catalogue
{
    
        public class Pendrive
        {
            int _id;
            string _brand;
            string _model;
            int _price;

            public Pendrive(int id, string brand, string model, int price)
            {
                this._id = id;
                this._brand = brand;
                this._model = model;
                this._price = price;
            }

            public int Id { get { return _id; } }
            public string Brand { get { return _brand; } }
            public string Model { get { return _model; } }
            public int Price { get { return _price; } }
        }
 }


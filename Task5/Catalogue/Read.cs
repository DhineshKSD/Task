using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.Xml;

namespace Catalogue
{
    class Read
    {
        /* XmlDocument Xdoc = new XmlDocument();
         Xdoc.Load("C:\\Users\\dhinesh.ks\\source\\repos\\Catalogue\\bin\\Debug\\netcoreapp3.0\\employees.xml");
         Xdoc.Save(Console.Out); */
        public void display()
        {
            /*XmlTextReader xtr = new XmlTextReader("C:\\Users\\dhinesh.ks\\source\\repos\\Catalogue\\bin\\Debug\\Pendrive.xml");

            while (xtr.Read())
            {
                if (xtr.NodeType == XmlNodeType.Element && xtr.Name == "ID")
                {
                    string s1 = xtr.ReadElementString();
                    Console.WriteLine("Id :" + s1);
                }
                if (xtr.NodeType == XmlNodeType.Element && xtr.Name == "brand")
                {
                    string s2 = xtr.ReadElementString();
                    Console.WriteLine("Brand :" + s2);
                }
                if (xtr.NodeType == XmlNodeType.Element && xtr.Name == "model")
                {
                    string s3 = xtr.ReadElementString();
                    Console.WriteLine("Model :" + s3);
                }
                if (xtr.NodeType == XmlNodeType.Element && xtr.Name == "price")
                {
                    string s4 = xtr.ReadElementString();
                    Console.WriteLine("Price :" + s4);
                }
                }*/

            XDocument doc = XDocument.Load("Laptop.xml");
            IEnumerable<XElement> Laptops = doc.Elements("Laptops").Elements();

            foreach (var lap in Laptops)
            {
                Console.WriteLine(lap);
                Console.WriteLine("--------------------------------------------------------------------");
            }
            Console.ReadKey();
        }

    }

}
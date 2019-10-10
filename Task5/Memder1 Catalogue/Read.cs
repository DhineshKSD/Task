using System;
using System.Xml;

namespace catalogue
{
    class Read
    {
            /* XmlDocument Xdoc = new XmlDocument();
             Xdoc.Load("C:\\Users\\dhinesh.ks\\source\\repos\\Catalogue\\bin\\Debug\\netcoreapp3.0\\employees.xml");
             Xdoc.Save(Console.Out); */
             public void display()
             {
            XmlTextReader xtr = new XmlTextReader("C:\\Users\\dhinesh.ks\\source\\repos\\Memder1 Catalogue\\bin\\Debug\\netcoreapp3.0\\Pendrive.xml");

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
            }
        }
            
    }
    
}
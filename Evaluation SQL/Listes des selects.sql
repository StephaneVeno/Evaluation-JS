/* 
SELECT Companyname AS 'Société', Contactname AS 'Contact', Contacttitle AS 'Fonction', phone AS 'Téléphone' FROM customers WHERE country = 'France';
SELECT ProductName AS 'Produit', UnitPrice AS 'Prix' FROM products AS p JOIN suppliers AS s ON p.SupplierID = s.SupplierID WHERE p.SupplierID = 1;
SELECT CompanyName AS 'Fournisseurs', COUNT(products.ProductID) AS 'Nbre products' FROM suppliers JOIN products ON products.SupplierID = suppliers.SupplierID WHERE country ='France' GROUP BY CompanyName ORDER BY COUNT(products.ProductID) DESC;
SELECT customers.CompanyName AS 'Client', COUNT(OrderID) AS 'Nbre commandes' FROM customers JOIN orders ON customers.CustomerID = orders.CustomerID JOIN `order details` AS od ON orders.OrderID = od.OrderID WHERE customers.Country = 'France' GROUP BY customers.CompanyName HAVING COUNT(od.OrderID) > 10;
SELECT CompanyName AS 'Client', SUM(UnitPrice*Quantity) AS "Chiffre d'affaire", Country AS 'Pays' FROM `order details` AS od JOIN orders ON orders.OrderID = od.OrderID JOIN customers ON customers.CustomerID = orders.CustomerID GROUP BY CompanyName HAVING SUM(UnitPrice*Quantity) > 30000.00 ORDER BY SUM(UnitPrice*Quantity) DESC;
SELECT customers.Country AS 'Pays' FROM customers JOIN orders ON customers.CustomerID = orders.CustomerID JOIN `order details` AS od ON orders.OrderID = od.OrderID JOIN products ON od.ProductID = products.ProductID JOIN suppliers ON products.supplierID=suppliers.SupplierID WHERE suppliers.CompanyName='Exotic Liquids' GROUP BY customers.Country;
SELECT SUM(UnitPrice*Quantity) AS 'Montant des ventes de 97' FROM `order details` AS od JOIN orders ON orders.OrderID = od.OrderID WHERE YEAR(OrderDate) LIKE '1997';
SELECT MONTH(OrderDate) AS 'Mois 97', SUM(UnitPrice*Quantity) AS 'Montant des ventes de 97' FROM `order details` AS od JOIN orders ON orders.OrderID = od.OrderID WHERE YEAR(OrderDate) LIKE '1997' GROUP BY MONTH(OrderDate) ASC;
SELECT MAX(OrderDate) AS 'Date de dernière commande' FROM orders JOIN customers ON orders.CustomerID = customers.CustomerID WHERE CompanyName = 'Du monde entier';
SELECT ROUND(AVG(DATEDIFF(ShippedDate, OrderDate))) AS 'Délai moyen de livraison en jours' FROM orders;
*/
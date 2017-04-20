// Verifica si el número es un número primo.

var isPrime = function(number)
{
	if ((number == 0) || (number==1) )return false;
	else
	{
		for (var i=2 ;i< number;i++)
		{
			if ((number % i)==0) return false
		}	
	}
return true
}

// obtiene una lista de los primeros numeros primos.

list = function (count)
{
	var list = [];
	var i = 1;
	
	while (list.length < count)
	{
		if (isPrime(i)==true) list.push(i);
		i++;
	}

return list;
}

exports.isPrime = isPrime;
exports.list = list;
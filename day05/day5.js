function areAnagrams(str1, str2) {
	const sorted1 = str1.toLowerCase().split('').sort().join('');
	const sorted2 = str2.toLowerCase().split('').sort().join('');
	return sorted1 === sorted2;
  }
  // Output: true
  console.log(areAnagrams('NCIT', 'NICT')); 
function ip2cidr(start, end) {
	start = ipToVal(start)
	end = ipToVal(end)
	const ret = []
	while (start <= end) {
		const mask1 = 32 - Math.log(start & -start) / Math.log(2)
		const mask2 = 32 - parseInt(Math.log(end - start + 1) / Math.log(2))
		const mask = Math.max(mask1, mask2)
		ret.push(`${valToIp(start)}/${mask}`)
		start += 1 << (32 - mask)
	}
	return ret
}

function ipToVal(ip) {
	return ip.split('.')
		.map(val => +val)
		.reduce((a, b) => (a << 8) | b)
}

function valToIp(val) {
	return new Array(4).fill(undefined)
		.map((_, i) => (val >>> (i * 8)) & 0xff)
		.reverse().join('.')
}

function coverAll(start, end) {
	const startVal = ipToVal(start)
	const endVal = ipToVal(end)
	const rest = startVal ^ endVal
	const mask = 32 - (startVal !== endVal ? Math.floor(Math.log(rest) / Math.log(2)) + 1 : 0)
	return `${start}/${mask}`
}

const start = '10.10.0.1', end = '10.10.0.16'
console.log(ip2cidr(start, end))
console.log(coverAll(start, end))
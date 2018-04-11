
var dns = require('dns'), 
    args = process.argv.splice(2),
    domain = args[0];


dns.resolve(domain, (err, addresses) =>{
    if (err) {
        console.log(err)
    }

    addresses.forEach((address)=> {
        getDomainReverse('resolve', address);
    })
});


dns.lookup(domain, (err, address, family) => {
    getDomainReverse('lookup', address);
} )

function getDomainReverse(type, ipaddress) {
    dns.reverse(ipaddress, (err, domains)=> {
        if (err) {
            console.log(err)
        }
        else if (domains.length > 1) {
            console.log(type + 'domain names for ' + ipaddress + ' ' + domains);
        } else {
            console.log(type + ' domain name for ' + ipaddress + ' ' + domain);
        }
    })
}

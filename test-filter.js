var active = [
  {id: 1, tur: 'Sigir', holat: 'Soglom', raqam: '101', antibiotik: true},
  {id: 2, tur: 'Sigir', holat: 'Kasal', raqam: '102'}
];
var curMolFilter = 'Kasal';
var fl = active.filter(function(m){ return m.holat==='Kasal' || m.antibiotik; });
console.log("Kasal fl:", fl);

curMolFilter = 'Sigir';
fl = active.filter(function(m){ 
    if(m.antibiotik) return false;
    if(m.tur!==curMolFilter) return false;
    return true;
});
console.log("Sigir fl:", fl);

var DB = { FM: [{ id: 123, raqam: '1', tur: 'Sigir' }] };
function ld(k) { return DB[k]; }
function sv(k, v) { DB[k] = v; console.log("Saved DB:", JSON.stringify(DB)); }
var mid = "123";
var mols = ld('FM');
var mol = mols.filter(function(x) { return x.id == mid; })[0];
if (mol) {
  mol.antibiotik = !mol.antibiotik;
  sv('FM', mols);
}

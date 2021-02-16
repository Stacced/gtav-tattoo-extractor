/*
Author	: Stacked
Desc.	: Extract tattoo data from all GTA 5 DLCs. Uses overlays metadata (required to run the tool)
*/
const xmlparse = require('fast-xml-parser');
const fs = require('fs');
const { join } = require('path');

async function ls(path) {
    const dir = await fs.promises.opendir(path)
    const filelist = []
    for await (const dirent of dir) {
        filelist.push(dirent.name)
    }

    return filelist
}

let tattooCount = 0
let tattooMale = 0
let tattooFemale = 0

ls('./tattoos_xml')
.then(filelist => {
    const allTattoos = []
    for (file of filelist) {
        const xmldata = fs.readFileSync(join(__dirname, 'tattoos_xml', file), 'utf8');
        const jsondata = xmlparse.parse(xmldata);
        const tattoos = jsondata['PedDecorationCollection']['presets']['Item'];
        
        for (const tattoo of tattoos) {
            if (tattoo.type === "TYPE_TATTOO") {
                const collection = file.toString().split(".")[0]
                console.log(`{"${collection}", "${tattoo.nameHash}", "${tattoo.gender}"},`);
                tattooCount++;

                if (tattoo.gender === "GENDER_MALE") {
                    tattooMale++;
                } else if (tattoo.gender === "GENDER_FEMALE") {
                    tattooFemale++;
                } else if (tattoo.gender === "GENDER_DONTCARE") {
                    tattooMale++;
                    tattooFemale++;
                }

                allTattoos.push(tattoo.txdHash.toString().toLowerCase());
            }
        }
    }

    console.log("Total: " + tattooCount);
    console.log("Total male: " + tattooMale);
    console.log("Total female: " + tattooFemale);
})
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    await prisma.halalInfo.createMany({
        data: [
          { halalStatus: 'muslim own' },
          { halalStatus: 'Non-Halal' },
        ],
        skipDuplicates: true, // Skip if the same data already exists
      })
    
      // Seed Payment Info
      await prisma.paymentInfo.createMany({
        data: [
          { paymentMethod: 'Cashless' },
          { paymentMethod: 'Cash Only' },
        ],
        skipDuplicates: true,
      })
    
      // Seed Stall Type
      await prisma.stallType.createMany({
        data: [
          { stallType: 'warung' },
          { stallType: 'kedai' },
        ],
        skipDuplicates: true,
      }) 

      await prisma.stallCategory.createMany({
        data: [
          { category: 'Early Morning' },  // Add other categories if needed
          { category: 'Breakfast' },
        ],
        skipDuplicates: true,
      });

      function getRandomLatitude() {
        // Random latitude within Malaysia's range: ~1.0 to ~7.5
        return (Math.random() * (7.5 - 1.0) + 1.0).toFixed(6);
      }
      
      function getRandomLongitude() {
        // Random longitude within Malaysia's range: ~99.0 to ~119.5
        return (Math.random() * (119.5 - 99.0) + 99.0).toFixed(6);
      }
      
      function getRandomName(index: number) {
        const namePrefix = ['Makanan', 'Warung', 'Gerai', 'Kedai', 'Restoran'];
        const nameSuffix = ['Sedap', 'Lazat', 'Mantap', 'Best', 'Enak'];
        return `${namePrefix[Math.floor(Math.random() * namePrefix.length)]} ${
          nameSuffix[Math.floor(Math.random() * nameSuffix.length)]
        } ${index}`;
      }
      
      function getRandomLocation(index: number) {
        const locationPrefix = ['Tepi Jalan', 'Kedai', 'Gerai', 'Pasar Malam', 'Kampung'];
        return `${locationPrefix[Math.floor(Math.random() * locationPrefix.length)]} ${index}`;
      }
      
      function getRandomNegeri() {
        const negeriList = [
          'Selangor',
          'Kuala Lumpur',
          'Johor',
          'Perak',
          'Pahang',
          'Penang',
          'Sabah',
          'Sarawak',
          'Melaka',
          'Negeri Sembilan',
        ];
        return negeriList[Math.floor(Math.random() * negeriList.length)];
      }
      
      const stallsData = Array.from({ length: 20 }, (_, i) => ({
        name: getRandomName(i + 1),
        location: getRandomLocation(i + 1),
        negeri: getRandomNegeri(),
        categoryId: 1, // Assuming category is predefined
        stallTypeId: 1, // Assuming stallType is predefined
        halalInfoId: 1, // Assuming halalInfo is predefined
        paymentInfoId: 1, // Assuming paymentInfo is predefined
        longitude: parseFloat(getRandomLongitude()), // Random unique longitude
        latitude: parseFloat(getRandomLatitude()), // Random unique latitude
      }));

      await prisma.stall.createMany({
        data: stallsData,
        skipDuplicates: true,
      })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
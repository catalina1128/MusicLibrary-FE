<script setup lang="ts">
import { ref } from 'vue'
import ArtistsList from '@/components/artists/ArtistsList.vue'

const artists = ref(
    [
        {
        "name": "Rammstein",
        "albums": [
            {
                "title": "Herzeleid",
                "songs": [
                    {
                        "title": "Wollt ihr das Bett in Flammen sehen?",
                        "length": "5:17"
                    },
                ],
                "description": "Herzeleid is the debut album by German Neue Deutsche Härte band Rammstein. It was released on 29 September 1995 through Motor Music. The album's original cover depicted the band members' upper bodies without clothing. This caused critics to accuse the band of trying to sell themselves as poster boys for the master race. The cover was replaced with a less controversial design for the album's international release. Despite the controversy, Herzeleid has been well received by critics and has since been certified platinum in Germany"
            },
            {
                "title": "Mutter",
                "songs": [
                    {
                        "title": "Mein Herz brennt",
                        "length": "4:39"
                    },
                ],
                "description": "Mutter is the third album by German Neue Deutsche Härte band Rammstein. It was released on 2 April 2001 through Motor and Universal Music. The album's title means mother in German and is a reference to the band's song of the same name. Mutter has been well received by critics and was a commercial success, reaching number one in Germany, Austria, and Switzerland. It has since been certified platinum in several countries."
            }
        ]
    },
    {
        "name": "Taylor Swift",
        "albums": [
            {
                "title": "Fearless",
                "songs": [
                    {
                        "title": "Fearless",
                        "length": "4:01"
                    },
                ],
                "description": "Fearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. The album was a commercial success, topping the Billboard 200 for 11 non-consecutive weeks. It was also the best-selling album of 2009 in the United States. Fearless has been certified Diamond by the Recording Industry Association of America (RIAA) and has sold over 10 million copies worldwide. It won four Grammy Awards, including Album of the Year, making Swift the youngest recipient of the award at the time."
            },
            {
                "title": "1989",
                "songs": [
                    {
                        "title": "Welcome to New York",
                        "length": "3:32"
                    },
                ],
                "description": "1989 is the fifth studio album by American singer-songwriter Taylor Swift. It was released on October 27, 2014, through Big Machine Records. The album marked a departure from the country music that had been Swift's trademark sound, and is described as her evolution into pop music. 1989 received generally positive reviews from music critics and was a commercial success, debuting at number one on the Billboard 200 and selling over 1.28 million copies in its first week. It has since been certified 9× Platinum by the RIAA and has sold over 10 million copies worldwide."
            }
        ]
    }
]
)
</script>

<template>
    <div class="box">
        <ArtistsList :artists="artists" />
    </div>  
</template>

<style scoped>
.box {
    align-content: center;
    padding: 20px;
}
</style>

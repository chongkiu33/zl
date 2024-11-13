import styles from '../pg.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TextSplitter from '../../components/TextSplitter/TextSplitter'

const Page = () => {
  return (
    <div> 
        <div className={styles.spTitle}>Seaweed hairband</div>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' ,marginBottom: '20px'}}>
            <iframe
                src={`https://www.youtube.com/embed/WOdQQSyRof4`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
        </div>
        

        <div className={styles.spAbstract}><TextSplitter text={` 
            “Biomaterial Hair Ties” uses Bio-materials to DIY recyclable hair ties. It provides a medium-elastic force that creates less friction and protects your hair compared to traditional hair ties. After it breaks, it could be degraded and reused as a natural fertilizer or re-DIY become a bioplastic/ hair tie again.
        `}/></div>

        <div className={styles.spChapter}>
          
          <div className={styles.spChapterTitle}>Context and Perspectives</div>
          <div className={styles.spChapterText}>
          
         

        <TextSplitter text={`
            Growing up on the seaside, I always decorated my hair with seaweed to play Princess Ariel. Moving back to the city for school, my ponytail became tighter and tighter, and I became far away from my old green and slow lifestyle. Especially on the high school tossed and turned nights, my head always felt heavy because of the tight hair tie in the morning time. This experience inspired me to prototype a seaweedbiomaterial hair tie that does not cause as much friction as nylon and is eco-friendly, and cost-effective at the same time.
        `}/>
        <TextSplitter text={`
            There are sensitive nerves in your hair follicles and under your scalp. If a ponytail stimulates large amounts of nerves, it can lead to headaches. If one has endured other types of headaches such as tension headaches, and migraines, or has a chronic pain condition like fibromyalgia, their hair tie will be more likely to trigger a headache as well.
        `}/>
        <TextSplitter text={`
            Headache occurs widely among female adults. According to the Centers for Disease Control and Prevention, “there are  4.3% of adults aged ≥18 years reported being bothered a lot by headache or migraine in the past 3 months with the percentage among women (6.2%) higher than that among men (2.2%)”. Percentages were higher among women than men in all age groups. Since a tight hair tie could trigger headaches for women, the improvement in hair tie might help the headache to occur less frequently.
        `}/>
        <TextSplitter text={`

            The current solution for releasing a hair-tie-related headache is getting rid of your hair ties and massaging your scalp gently in the area could be the most- instant solution. However, for most occasions where you go to work and school, or where there is a dressing restriction like a gym, the ponytail is still the most available option. We could not abandon ponytail to relieve the pain, but some implementation could be made.
        `}/>
        <TextSplitter text={`
            An unsuitable hair tie could cause a hair breakage problem as well. Imagine you are using hair ties to style your hair, and you are trying to twist and stretch your hair with them. It will cause some hair breakage. This damage with the tight ponytail-related scalp and hair follicle stress would thinning and hair loss, even weakened hair shaft.
        `}/>
        <TextSplitter text={`
            Besides the headache and hair damage problems that a hair tie could cause, these traditional plastic-manufactured products could cause lots of pollution. About 15 million hair ties get lost or thrown away every day in the United States alone. These thrown-away plastic hair ties can harm wildlife, and the vast majority of plastics are not biodegradable. The reason why the hair tie becomes that severe is because it is easy to lose and the cost-effective hair tie is made of plastic.
        `}/>

            <TextSplitter text={`
                Therefore, improving the materials to become cost-effective biomaterial hair ties would help us to solve some parts of plastic-related pollution problems and I would like it to have moderate friction that could care for our scalp and hair.
            `}/>

            

          </div>
        </div>

        <div className={styles.spChapter}>
          
          <div className={styles.spChapterTitle}>Similar Projects</div>
          <div className={styles.spChapterText}>
            <Link className={styles.link} href="https://kooshoo.com/pages/about">KooShoo </Link>
            <Link className={styles.link} href="https://alexanderclementine.com/products/seaweed-scrunchie?variant=37378936701090">Seaweed Scrunchie</Link>
          </div>
        </div>


    


        <div className={styles.spChapter}>
          
          <div className={styles.spChapterTitle}>Reference</div>
          <div className={styles.spChapterText}>
         
                <Link className={styles.link} href="https://www.healthline.com/health/ponytail-headache#What-causes-a-ponytail-headache?">Ponytail Headache: Why It Happens and How to Get Relief</Link>
          </div>
        </div>


        <div className={styles.spChapter}>
          
          <div className={styles.spChapterTitle}>Research on different hair ties</div>
          <div className={styles.spChapterText}>
         

        <TextSplitter text={`
            There is a wide range of hair ties from rubber bands to scrunchies, what’s their difference and which one is best for your hair?
        `}/>
            
        <TextSplitter text={`
            Ranking Criteria|
        `}/>
        <TextSplitter text={`
            Wristability, Pullage, Loose Strands, Head Pain, Crease
        `}/>
            
        <TextSplitter text={`
            Variety of Hair Types| Thick vs. Thin, Curly vs. Straight,
        `}/>

        <TextSplitter text={`
            According to the various hair ties displayed in the first article, the rubber hair ties easily fell out of favor because they were too uncomfortable and pulled out too much hair when removed.
        `}/>
            
        <TextSplitter text={`
            However, the scrunchies have the drawback of loose strands, and the hair ring can only be tightened to stretch.
        `}/>

        <TextSplitter text={`
            Our reference product KooShoo has a high rank of how it keeps it in space. The best hair tie in this article is the Silke London Silk Hair Tie Set. I will discuss what it made and why it has the best quality later.
        `}/>
            
        <TextSplitter text={`
            (Hydrogels combining the properties of silk and elastin were formed to generate biomaterials called silk-elastin-like protein polymers (SELPs).)
        `}/>

        <TextSplitter text={`
            The reason why Silke London silk hair tie is special is that it is covered with 100% silk, which means it causes much less snapping, kinks, or damage and has a stronghold at the same time.

However, it is expensive as the 6 hair ties cost $39.
        `}/>
            
        <TextSplitter text={`
            Also, I found that using soft fabric or other materials with less friction can greatly increase the wearing experience and effectively reduce the pulling hair situation after removing the hair ties. However, they need to add “patterns” to increase the ability to hold the hair together. The patterns should be sustainable. Besides, I found that the mixed material of hair ties(especially for adding a metal part) is not that competitive in the hair ties as well.
        `}/>

        <TextSplitter text={`
            In the second article, it states that scrunchies are more comfortable to wear, but elastic hair ties are stronger, more durable, and more affordable.
        `}/>
            
        <TextSplitter text={`
            Factors to consider: hair type, intended use, material, comfort, and durability.
        `}/>


        <ul>
        <TextSplitter text={`The disadvantage of hair ties in Reddit`}/>
            <li><TextSplitter text={`If used too tightly or too often, hair ties can cause damage to your hair, such as breakage or split ends.`}/></li>
            <li><TextSplitter text={`Hair ties can also cause headaches if worn for extended periods.`}/></li>
            <li><TextSplitter text={`Some hair ties are made with materials that can cause allergies or skin irritation.`}/></li>
            <li><TextSplitter text={`Hair ties can get lost easily, especially if they are small or if you are traveling.`}/></li>
        </ul>

        <TextSplitter text={`
            From our research on current hair ties, we could see that wearing a soft and smooth surface hair tie would be more comfortable, but they are not that strong and could hold hair for a long time, and they are more expensive. Also, we could see an increasing trend in degradable or recyclable materials.
        `}/>

        <TextSplitter text={`
            This leads me to think of developing a biodegradable material to develop a soft surface hair tie with a certain elastic. The user could DIY them or mend them at a low cost, or they could let them degrade naturally, becoming a fertilizer for their plants.
        `}/>

        <TextSplitter text={`
            I plan to use the seaweed fabric as a cover and another biomaterial to perform the elastic.
        `}/>
        <ul>
        <div>Reference</div>
        <li><Link className={styles.link} href="https://www.purewow.com/beauty/best-hair-ties">We Tried Every Single Hair Tie and Ranked Them from “Best” to “Get Off My Wrist”</Link></li>
        <li><Link className={styles.link} href="https://burlybands.com/blogs/news/scrunchies-vs-elastic-hair-ties-choosing-the-best-hair-accessory-for-thick-hair">Scrunchies vs Elastic Hair Ties: Choosing the Best Hair Accessory for Thick Hair</Link></li>
        <li><Link className={styles.link} href="https://soulvationsociety.com/blogs/soulvation-society/understanding-hair-ties-your-top-questions-answered">Understanding Hair Ties: Your Top Questions Answered</Link></li>
        </ul>


        </div>
        </div>



        <div className={styles.spChapter}>
          
            <div className={styles.spChapterTitle}>Research on BioMaterial</div>
            <div className={styles.spChapterText}>
            
            <TextSplitter text={`Agar-agar and Gelatin, also hydrogels which is similar with silk`}/>
            
            
            
            </div>
        </div>


        <div className={styles.spChapter}>
          
            <div className={styles.spChapterTitle}>Web for biomaterials|</div>
            <div className={styles.spChapterText}>
            <div>https://materiom.org/</div>
            
            
            <ul>
            <strong>Agar Agar</strong>
            <TextSplitter text={`(adding more glycerin will increase the softness/flexibility)`} />
            <li><Link className={styles.link} href="https://pubmed.ncbi.nlm.nih.gov/22340685/">Scientific research for properties of agar agar</Link></li>
            <li><Link className={styles.link} href="https://www.youtube.com/watch?v=Ty0O2VmbNeE">Video tutorial for making biomaterial with agar agar</Link></li>
            </ul>


            <ul>
            <strong>Gelatin</strong>
            <TextSplitter text={`(more elastic/ rubber-like than agar)- rubber-like DIY recipe`} />
            <li><Link className={styles.link} href="https://www.youtube.com/watch?v=FE_ps20YHro">Video tutorial for making biomaterial with gelatin</Link></li>
          
            </ul>


            <ul>
            <strong>Stretchable Hydrogels</strong>
            <li><Link className={styles.link} href="https://www.youtube.com/watch?v=_sz0KkT603E">Video tutorial for making stretchable biomaterial with hydrogels</Link></li>
            
            </ul>

         
            
            
           <Link className={styles.link} href="https://www.toufood.com/product/agar-elastic-powdered-agar-and-gellan/?lang=en#:~:text=It%20is%20a%20combination%20of%20agar%20and%20gellan%20and%2C%20therefore,meat%20or%20100%20g%20vegetables."><strong>Agar Elastic</strong>(Powered agar and gelatine (to mend the problem that agar agar is not that elastic))</Link>
          
            


            <ul>
            <Link className={styles.link} href="(https://spark.iop.org/stretching-truth)"><strong>Super stretchy seaweed</strong></Link>
            <TextSplitter text={`By adding a seaweed extract to a hydrogel, Harvard scientists have developed a substance that can stretch to 20 times its original length. The material is being considered as a replacement for cartilage and for covering wounds.`} />
            </ul>

       
            </div>
        </div>




        <div className={styles.spChapter}>
          
            <div className={styles.spChapterTitle}>Research on Seaweed</div>
            <div className={styles.spChapterText}>
            
            <Link className={styles.link} href="https://www.youtube.com/watch?v=TqXSFckqLhU">How to press and dry seaweed</Link>
            <Link className={styles.link} href="https://www.verywellfit.com/seaweeds-health-claims-2223487">Seaweed nutrition</Link>
            <Link className={styles.link} href="https://www.gearpatrol.com/fitness/a37779347/satisfy-running-seaweed-sustainable-performance-fabric/">A sustainable Seaweed Material</Link>
            </div>
        </div>


        <div className={styles.spChapter}>
          
            <div className={styles.spChapterTitle}>Research on Similar Product</div>
            <div className={styles.spChapterText}>
            
            <Link className={styles.link} href="https://alexanderclementine.com/products/seaweed-scrunchie?variant=37378936701090">seaweed scrunchie</Link>
            <Link className={styles.link} href="https://www.amazon.com/Biodegradable-Elastic-Hair-Ties-Women/dp/B07QFYGZ48">Biodegradable Elastic Hair Ties Women</Link>
            <Link className={styles.link} href="https://kooshoo.com/pages/about">Kooshoo</Link>
            </div>
        </div>


        <div className={styles.spChapter}>
          
            <div className={styles.spChapterTitle}>Experiments on Agar-agar and Gelatine</div>
            <div className={styles.spChapterText}>
            <strong>Library Documentation</strong>
            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='seaweedhairband' src="/hairband/1.png" layout="responsive" width={100} height={100} />
            </div>
            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='seaweedhairband' src="/hairband/2.png" layout="responsive" width={100} height={100} />
            </div>

            <strong>Library Documentation <Link className={styles.link} href="https://drive.google.com/drive/folders/16Ha6X4m-CIMJqm7W_my_uEsIBLyoAOGN">whole process</Link>
            <br/>Material Preparation
            </strong>
            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='seaweedhairband' src="/hairband/3.png" layout="responsive" width={100} height={100} />
                <TextSplitter  text={`Left: Different Gelatines, Agar-agar; Right: beaker, mold(plate), scale The source of these materials, Target: Knox and Jell. O gelatin, plate, beaker Amazon: Beef Gelatine Powder, Agar- agar powder, scale; Whole foods: Glycerin`} />
            </div>

            <ul>
                <strong>Experiment Steps for Agar Agar</strong>
                <li>500ml Water and 5 ml Glycerin following this video<Link className={styles.link} href="https://www.youtube.com/watch?v=Ty0O2VmbNeE">Homemade Bioplastic: agar vs. gelatin recipe</Link></li>
                <li>1 oz AgarAgar<br/><Image  src='/hairband/4.png' width={230} height={300} alt='1 oz AgarAgar' /></li>
                <li>Cooking<br/><Image  src='/hairband/5.png' width={230} height={300} alt='Cooking' /></li>
                <li>GetBubbleOut& Put on Molds</li>
                <li>Just Finished</li>
                <li>Finalize Dry out</li>     
            </ul>


            <ul>
                <strong>Experiment Steps for Gelatine</strong>
                <li>0.3g Gelatine, Water and Glycerin, ratio following this video<Link className={styles.link} href="https://www.google.com/url?q=https://www.youtube.com/watch?v%3DFE_ps20YHro&sa=D&source=editors&ust=1731500723347333&usg=AOvVaw02sJsh56ME7HOGCKJIZzDq">0.3g Gelatine, Water and Glycerin, ratio following this video</Link>
                <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='seaweedhairband' src="/hairband/6.png" layout="responsive" width={100} height={100} />
                </div>
                </li>
                <li>Mixing & Cooking</li>
                
                <li>DryOut</li>  
            </ul>


            <div>
                <strong>Experiment (Soft Agar-Agar following library Instructions)</strong>
                <TextSplitter text={`The same procedure, ingredients: 240ml, 12g, 30g glycerin (More glycerin to add softness)`} />
            </div>

            <div>
                <strong>Experiment (Elastic Gelatine)</strong>
                <TextSplitter text={`The same procedure, ingredients: 240ml, 48g gelatine (beef gelatine), 60g glycerin`} />
            </div>

            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='seaweedhairband' src="/hairband/7.png" layout="responsive" width={100} height={100} />
                <TextSplitter  text={`Left: Soft agar agar, Right: Elapstic Gelatine`} />
            </div>

            <ul>
                <strong>ExperimentNotes:</strong>
                <li><TextSplitter  text={`I found out I made too many materials in this trial, decided to change in the following experiment with gelatine (500ml water recommended)`} /></li>
                <li><TextSplitter  text={`Do not use pig gelatine for your first trial (Knox gelatine) because it is too smelly when cooked`} /></li>
                <li><TextSplitter  text={`How to avoid bubbles:`} />
                    <ul>
                        <li><TextSplitter  text={`Control producing bubbles in the procedure: avoid boiling them (controlling the temperature does not over the 100 celsius under a standard atmosphere)`} /></li>
                        <li><TextSplitter  text={`Control producing bubbles during empty out the materials from the pot: slow, make the pot near to the plate/ mold`} /></li>
                    </ul>
                </li>
                <li><TextSplitter  text={`While you are adding glycerin to the water, stir a little but before you add it to the pot, then add the agar agar/ gelatine because glycerin is thicker liquid which is not that easy to leaving the beaker`} /></li>
                <li><TextSplitter  text={`Avoid using hand to touch it when it is cooled down in the first day, and store them in a clean environment`} /></li>
                <li><TextSplitter  text={`Do not immediately move the plate/ mold as soon as the liquid is poured out, it is easy to puur out with a sift mold`} /></li>
                <li><TextSplitter  text={`The material will shrink while it dries out`} /></li>              
            </ul>
            <div>
            <strong>How to Store Elastic Gelatine & Make it Elastic Again</strong>
            <TextSplitter  text={`Store instruction: Clean environment, spray a little water if you feel it’s going to dry out`} />
            <TextSplitter  text={`While you are making a thin layer of gelatine, it is easy for it to dry out. That is lost elasticity. If you want it to be elastic again, you could just spray some water on it and store in a clean environment so that it will become elastic again.`} />
            <TextSplitter  text={`Remember to control the amount of water you sprayed on it and had better not to sink it into water or else it will become too soft so that it will easily break when you stretch it.`} />
            </div>


            </div>




        </div>


        <div className={styles.spChapter}>
          
          <div className={styles.spChapterTitle}>Prototypes</div>
          <div className={styles.spChapterText}>

            <strong>DIY a Hair Tie or Telephone-Line Hair Tie :</strong>
            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='seaweedhairband' src="/hairband/cover.png" layout="responsive" width={100} height={100} />
                <TextSplitter  text={`Left: A Agar-agar based hair tie; right: a gelatine-based hair tie`} />
            </div>
            
        </div>
        </div>


        <div className={styles.spChapter}>
          
          <div className={styles.spChapterTitle}>DIY Materials</div>
          <div className={styles.spChapterText}>
            <Link className={styles.link} href="https://nyu.libcal.com/event/11611622?f=h">Algae knitting workshop</Link>
            <Link className={styles.link} href="https://www.youtube.com/watch?v=UmcthQRWGUY">How to DIY a hair tie</Link>
            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='seaweedhairband' src="/hairband/material.jpg" layout="responsive" width={100} height={100} />
               
            </div>
            
        </div>
        </div>


        <div className={styles.spChapter}>
          
          <div className={styles.spChapterTitle}>
          Re-DIY </div>
          <div className={styles.spChapterText}>
            <strong>Re-DIY with the used Materials</strong>
            <div>Warning: Do not re-cook the moldy materials, let them degrade RE-cook (Large pieces) & Remaking naturally (put the scraps into the watering pot)</div>
            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='seaweedhairband' src="/hairband/rediy.jpg" layout="responsive" width={100} height={100} />
               
            </div>
            
        </div>
        </div>


        <div className={styles.spChapter}>
          
          <div className={styles.spChapterTitle}>
          How Degradations Happens</div>
          <div className={styles.spChapterText}>
            <div>
            <Link className={styles.link} href="https://www.google.com/url?q=https://www.google.com/search?client%3Dsafari%26rls%3Den%26q%3Dmicroorganisms%2Bhave%2Bagarases%26ie%3DUTF-8%26oe%3DUTF-8&sa=D&source=editors&ust=1731500723352319&usg=AOvVaw2A1KsArNKK2MABSnQRvsC2">microorganisms have agarases</Link>
            <TextSplitter  text={`Degrade in the seawater and marine sediments.`} />
            </div>
            
            <div>
            <Link className={styles.link} href="https://www.google.com/url?q=https://www.tandfonline.com/doi/pdf/10.1080/00021369.1983.10865852&sa=D&source=editors&ust=1731503323368912&usg=AOvVaw1yfDBx1LOD4r7qXXlvV-kK">Gelation of Gelatin Solution</Link>
            <TextSplitter  text={`Degrade under temperature above 40 Celsius`} />
            </div>
            
            
        </div>
        </div>


        <div className={styles.spChapter}>
          
          <div className={styles.spChapterTitle}>
          Next Steps</div>
          <div className={styles.spChapterText}>
            <ul>
                <li><strong>How to add elastic properties stably - research the other hair tie ingredients from Kooshoo</strong>
                <TextSplitter  text={`Rubber!`} />
                <Link className={styles.link} href="https://www.google.com/url?q=https://www.youtube.com/watch?v%3DaEIAYBGRyYY&sa=D&source=editors&ust=1731503323369557&usg=AOvVaw3yKGhkyT6-n0l7e5SXRg9e">How Rubber bands are made</Link>

                </li>
                <li><strong>Experiment with Seaweed/hydrogel</strong></li>
                <li><strong>Test different Properties</strong>
                    <TextSplitter  text={`Water Resistance`} />
                    <TextSplitter  text={`Elastic`} />
                    <TextSplitter  text={`Degrade`} />
                    <TextSplitter  text={`Strength`} />
                    </li>
            </ul>
            
            
        </div>
        </div>

        <div className='bottomspace'></div>
    </div>
    )
    }

export default Page;
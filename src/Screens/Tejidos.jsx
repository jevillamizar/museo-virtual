import { useMeta } from '../hooks/useMeta';
import { useAnalytics } from '../hooks/useAnalytics';
import Breadcrumb from "../Componentes/UI/Breadcrumb";
import { Link } from 'react-router-dom';

const Tejidos = () => {
    useAnalytics('Hilados en las sociedades prehispánicas');
    useMeta({
        titulo: 'Hilados en las sociedades prehispánicas',
        descripcion: 'Descubre la historia de los hilados en las sociedades prehispánicas del suroccidente colombiano',
    });

    return (
        <div className='min-h-screen flex flex-wrap items-center justify-center text-center bg-unicauca-blancoRoto'>
            <main className='flex flex-wrap items-center justify-center w-full'>
                <div className="w-full px-4 pt-4">
                    <Breadcrumb items={[
                        { label: 'Inicio', path: '/' },
                        { label: 'Hilados en las sociedades prehispánicas', path: '/Tejidos' },
                    ]} />
                </div>
                <section className="w-full max-w-screen-md px-6 pt-10 pb-6 text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-unicauca-grisOscuro mb-4 font-poppins">
                        Hilados en las sociedades prehispánicas
                    </h1>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                        El estudio comparativo de la producción textil de las sociedades prehispánicas del norte de 
                        Sudamérica es relativamente reciente. Con la notable excepción de los análisis de volantes de 
                        huso de las sociedades muiscas, en el centro de Colombia, o de fragmentos de textiles en el 
                        extremo sur del país, poco se conoce sobre la variabilidad de esta actividad artesanal, 
                        especialmente para el suroccidente colombiano.
                    </p>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                        En algunas regiones la variabilidad de volantes sugiere el hilado de diferentes tipos de 
                        fibras y calidades, mientras que en otras hubo un énfasis en un tipo de fibra o, alternativamente, 
                        en la especialización en la producción de textiles, lo cual se ha asociado con estrategias para 
                        la obtención de riqueza y un mayor estatus en otras regiones de Colombia.
                    </p>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                        A continucion se describen las diferencias en la producción de hilos en cuatro áreas 
                        arqueológicas (Corinto, Patía, Popayán, y Quimbaya) del suroccidente colombiano 
                        (siglos VII a XVI d.C.) empleando la colección de los volantes de huso almacenados en la 
                        ceramoteca del Museo de Historia Natural de la Universidad del Cauca. La variabilidad en la 
                        producción de hilos es identificada por algunas características de los volantes de huso 
                        (peso, altura y diámetro), la evidencia más conspicua de producción textil en esta región.
                        Los resultados indican que la producción textil no fue homogénea.
                    </p>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                        El estudio de la variabilidad en la producción de hilados puede brindar información sobre las 
                        diferencias culturales en la elaboración de textiles en áreas próximas entre sí, así como 
                        proporciona un dato relevante sobre la relación entre los textiles y procesos de complejización 
                        social, a través de la estandarización de su producción.
                    </p>
                    <h2 className="text-2xl font-bold text-unicauca-verde text-center mb-2 font-poppins">
                        Aproximación a la economía política prehispánica a través de los volantes de huso: Diversidad 
                        regional en el suroccidente colombiano
                    </h2>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                    La diversidad en las características de los volantes de huso puede ser empleada para identificar 
                    diferentes aspectos de la economía política o del grado de autonomía económica dentro de una unidad 
                    política. De acuerdo con Boada (2009) el control del hilado de algodón por una elite podría ser 
                    observado en la estandarización en la calidad del hilo, el cual podría ser inferido en la similitud 
                    (estandarización) morfológica y tecnológica de los volantes de huso. Por el contrario, la autonomía 
                    económica, donde cada unidad doméstica se procura los textiles, debería observarse en una mayor 
                    diversidad en los atributos morfológicos y tecnológicos de los volantes de huso (como su tamaño, 
                    materia prima, forma). En el medio de estas dos estrategias de elaboración de textiles se encuentra 
                    la producción por especialistas independientes, la cual implica un punto intermedio en la variabilidad 
                    de estos artefactos.  Los postulados de Boada no descansan exclusivamente en el grado de similitud 
                    de los volantes de huso, sino en su cantidad y distribución espacial dentro de un asentamiento, 
                    pero el estudio de sus características brinda un punto de partida para identificar la variabilidad 
                    regional en la calidad de los tejidos, así como el rol que pudo tener la producción de hilado en la 
                    formación y/o el mantenimiento de la complejidad social en una región en particular. La caracterización 
                    de variabilidad de los volantes de huso en diferentes regiones próximas entre sí es entonces un primer 
                    paso para identificar diferencias económicas entre algunas sociedades prehispánicas del suroccidente 
                    colombiano basadas en la producción de textiles.
                    </p>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                    La calidad de la información de la organización social, económica y política difiere mucho entre las 
                    cuatro sociedades prehispánicas analizadas, pero los investigadores enfocados en cada una de estas 
                    regiones las han caracterizadas como cacicazgos, un término empleado para denotar unidades políticas 
                    con marcadas desigualdades sociales y económicas (Ford 1944; Patiño & Gnecco 1983; Giraldo et al 
                    2023; Jaramillo et al 2023). También se asemejan en que no habitaron en villas nucleadas y en que 
                    el cultivo del maíz fue una de sus principales fuentes de subsistencia. Estas poblaciones, sin embargo, 
                    se diferencian, además de la forma y estilo de los contenedores cerámicos que empleaban, en las 
                    pautas de enterramiento y los lugares de asentamiento: En el Patía, los sitios arqueológicos 
                    identificados se localizaron en las terrazas aluviales y en las colinas onduladas en la cuenca 
                    alta del río Patía. En esta región hubo variabilidad en las prácticas funerarias; con enterramientos 
                    primarios de hasta 12 m de profundidad y urnas para enterramientos secundarios. En pocas de estas 
                    tumbas se encontraron objetos de oro y conchas marinas. Los enterramientos se localizaron en 
                    cementerios de hasta 200 individuos (Patiño y Gnecco 1983). La población de Corinto se asentó en la 
                    vertiente occidental de la cordillera Central, siguiendo un patrón de poblamiento disperso, 
                    construyendo sus viviendas sobre aterrazamientos de diversos tamaños. Sepultaban a sus muertos en 
                    cementerios de hasta 30 individuos, en tumbas individuales de pozo con cámara lateral.
                    </p>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                    En el valle de Popayán, de otro lado, la población prehispánica ocupó las cimas de las colinas que 
                    bordean al valle por el suroriente, modificando algunas de ellas con montículos, adobes y rellenos, 
                    que implicaron una gran inversión de trabajo. En las cimas de estas colinas se enterraban a sus 
                    muertos. La población prehispánica de Popayán ha sido caracterizada como de gran complejidad política, 
                    debido al poderío militar del cacique con el que se enfrentaron los ibéricos; aunque poca evidencia 
                    de violencia ha sido hallada en el registro arqueológico (Giraldo et al 2023). Las diferentes 
                    sociedades agrupadas bajo el término ‘Quimbaya’ también han sido reconocidas como guerreristas por 
                    información etnohistórica. Sin embargo, estas son más conocidas por la cantidad y calidad de su 
                    orfebrería y por las tumbas de cancel (Jaramillo et al 2023).
                    </p>
                    <h2 className="text-2xl font-bold text-unicauca-verde text-center mb-2 font-poppins">
                        Producción de textiles en el suroccidente colombiano
                    </h2>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                    La producción de textiles ha sido identificada para las poblaciones prehispánicas del suroccidente 
                    colombiano a través de líneas de evidencia muy diferentes: documentales (fuentes etnohistóricas); 
                    iconográficas (piezas antropomorfas cerámicas, líticas y metalúrgicas con algún atuendo) y 
                    artefactuales (textiles y volantes de huso). No obstante, no hay estudios detallados sobre la 
                    producción textil en esta región como si ocurre para el centro de Colombia (Boada 2007, 2009; 
                    Jaramillo 2023) o en el extremo sur del país (Devia & Cardale de Schrimpff 2017).
                    </p>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                    Los documentos del periodo de contacto no mencionan directamente el proceso de producción de 
                    textiles o quienes lo hacían, pero sus descripciones de las poblaciones locales atestiguan 
                    vestimentas, las diferencias en formas de usarlas entre hombres y mujeres y la diversidad 
                    entre regiones. Para inicios del siglo XVI d.C. Pedro Cieza de León, por ejemplo, indica 
                    que, para los pobladores de la región Quimbaya</p>
                    <i>
                    Las mujeres de éstos son también dispuestas como ellos, andan desnudos ellos y ellas, y 
                    descalzos. No traen más que maures con que se cubren sus vergüenzas, y estos no de algodón, 
                    sino de unas cortezas de árboles los sacan y hacen delgados y muy blandos tan largos como 
                    un [sic] vara y de anchor de dos palmos (2005 [1553]: 77).
                    </i>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                        Más al sur, en las proximidades de Cali, Cieza afirma que
                    </p>
                    <i>
                    No visten más que los maures que he dicho que traen los demás indios. Las mujeres todas andan 
                    vestidas de unas mantas gruesas de algodón. Los muertos que son más principales los envuelven 
                    en muchas de aquellas mantas que son tan largas como tres varas, y tan anchas como dos (2005 [1553]:78).
                    </i>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                    Y continua: "Su traje antiguo era ponerse una manta pequeña como delantal por delante y echarse 
                    otra pequeña por las espaldas, y las mujeres cubrirse desde la cintura abajo con mantas de 
                    algodón (2005:82-3)". Estos cortos pasajes testimonian no solo diferencias generizadas del 
                    uso del vestido, la variabilidad regional y los tipos de material de los vestidos sino su 
                    empleo como marcador de estatus al momento del contacto europeo. Sin embargo, y en discrepancia 
                    con otras regiones de Colombia (como el área Muisca), no hay muchas referencias sobre el empleo 
                    de los textiles como tributo, aunque si como un objeto para el intercambio por sal y oro (Trimborn 2005).
                    </p>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                    Respecto a los análisis iconográficos, estos han sido realizados para el área Calima y el 
                    valle geográfico del río Cauca (zonas ubicadas en medio de las regiones analizadas en este 
                    artículo). En estos se reportan el uso de faldas y taparrabos o bahagues en figurinas cerámicas 
                    y orfebres; no obstante, la mayoría de las representaciones humanas se presentan desnudas 
                    (Bray et al. 2005; Cardale 2005). El estudio de los tejidos es más escaso, debido a las 
                    condiciones ácidas de los suelos colombianos que han impedido su conservación. Solo fragmentos 
                    de textiles en algodón, conservados por excepcionales condiciones de humedad en contextos 
                    anaeróbicos o por calcinación, han sido recuperados de contextos funerarios en la región Quimbaya 
                    y las proximidades de Cali (Devia & Cardale 1994).
                    </p>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                    Si bien estas fuentes de información proporcionan algunos indicios sobre la presencia de 
                    los tejidos en las poblaciones prehispánicas en el suroccidente colombiano, buscamos 
                    contribuir en la comprensión de los tejidos a través del análisis del tipo de evidencia 
                    más notable en el registro arqueológico de la región: los volantes de huso.
                    </p>
                    <h2 className="text-2xl font-bold text-unicauca-verde text-center mb-2 font-poppins">
                    Los volantes de huso son objetos macizos con un agujero vertical central que se introducen en 
                    un palo (el huso) y son empleados como contrapeso para las labores de hilado a mano. Estos 
                    son hechos en diferentes materiales, principalmente de cerámica o piedra. A pesar de la 
                    recuperación de volantes de huso en diferentes contextos arqueológicos (domésticos y funerarios), 
                    no se han adelantado estudios que busquen comprenden la producción de textiles en el suroccidente 
                    colombiano. El único estudio detallado ha sido de corte iconográfico, que buscaba caracterizar 
                    los diferentes diseños decorativos de los volantes de huso en el valle medio del río Cauca 
                    (Rodríguez & Jaramillo 1993). Giraldo et al (2023), en un estudio comparativo de unidades 
                    de vivienda prehispánica en Popayán, no encontraron un claro patrón que sugiriera que el 
                    hilado y la producción textil fueran actividades especializadas de las élites, aunque ese 
                    estudio se basó en las frecuencias relativas de los volantes de huso en un número limitado 
                    de viviendas y no en los atributos mensurables de los volantes de huso.
                    </h2>

                    <h4 className="text-xl font-bold text-unicauca-verde text-center mb-2 font-poppins">Referencias</h4>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                    Boada, J. (2009). La Producción de Textiles de Algodón en la Política Económica de los Cacicazgos Muiscas de los Andes Colombianos. En Economía, Prestigio y Poder: Perspectivas desde la Arqueología, C. Sánchez, ed., pp. 272-313. Bogotá: Fondo Editorial ICANH.
                    </p>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                    Ford, J. (1944). Excavations in the vicinity of Cali, Colombia. Yale University Publications in Anthropology 31. New Haven: Yale University Press.
                    </p>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                    Giraldo, H. J., Díaz, M. F., & Corrales, G. A. (2023). Desigualdades sociales, producción y consumo en unidades domésticas prehispánicas en el valle de Popayán, Colombia. Revista Colombiana de Antropología 59(1): 140-172. doi.org/10.22380/2539472X.2364
                    </p>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                    Jaramillo, L., E. Ramos & J. Ramos. (2023). Arqueología regional en el Cauca Medio: La Ocupación Humana Prehispánica en Filandia. Pittsburgh: University of Pittsburgh Center for Comparative Archaeology.
                    </p>
                    <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
                    Patiño, A. & Gnecco, R. (1983). Reconocimiento Arqueológico del valle del Patía. Zona Septentrional. Informe final presentado a la Fundación de Investigaciones Arqueológicas Nacionales, Bogotá.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default Tejidos;
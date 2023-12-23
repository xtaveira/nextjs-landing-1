"use client"

import React from 'react'
import FeatureCard from './FeatureCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import { Autoplay } from 'swiper/modules'

const Features = () => {

  const benefits = [
    {desc: "A existência do Metrô resulta em reduções de: consumo de combustíveis utilizados pelos outros modos; custos de manutenção e operação de vias; tempos de viagens e de acidentes."},
    {desc: "O Metrô é reconhecido por sua rapidez, confiabilidade e regularidade"},
    {desc: "Trens circulam em vias segregadas e não disputam espaço nas ruas como os outros veículos que ficam parados no congestionamento."},
    {desc: "Alta capacidade de transportar passageiros e fazem parte de uma rede integrada a outros modos como os trens, os ônibus e as bicicletas."},
    {desc: "A operação da rede do Metrô gera uma série de benefícios, além daqueles devidos a sua própria função."},
    {desc: "A existência do Metrô resulta em reduções de: emissão de poluentes e dos gases de efeito estufa; redução dos custos operacionais contra ônibus, automóveis e motocicletas;"},
    {desc: "Morar perto do metrô acaba sendo uma exigência para a maioria das pessoas que usam esse meio de transporte como aliado na busca pela otimização do tempo."},
    {desc: "Sendo assim, quando botamos na ponta do lápis, mesmo sem o benefício do vale-transporte, andar de metrô gera muito menos gastos do que os carros."},
    {desc: "Ter uma estação de metrô perto de casa economiza não somente dinheiro, mas também o seu tão precioso tempo."},
    {desc: "Conquista mais tempo com a sua família, mais tempo para cuidar da sua saúde, do seu bem-estar e, ainda, otimiza o seu dia."},
  ]

  return (
    <section className="border-2 border-yellow-400 w-full py-6 px-5 flex justify-evenly items-center
    flex-col md:flex-row">
      <div className="flex flex-col w-full items-start gap-5">
        <h3>Por que andar de Metro?</h3>
        <Swiper 
        slidesPerView={3} 
        loop={false} 
        autoplay={{delay:0, disableOnInteraction: false}} 
        speed={9000} 
        modules={[Autoplay]}
        className="w-full justify-center items-center flex"
        spaceBetween={50}
        >
          {benefits.map((benefit,index) => (
            <SwiperSlide key={index} className='flex items-center'>
              <FeatureCard text={benefit.desc} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Features
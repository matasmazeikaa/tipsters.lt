<template>
	<div
  class="{[
    "border-gray-100 border rounded-[4rem]",
    {
      "p-32 h-fit mt-auto": !isMostPopular,
      "relative lg:bottom-[3.2rem]": isMostPopular,
    },
  ]}
  data-sal="slide-up"
  data-sal-delay="200"
>
  {{
    isMostPopular && (
      <p class="bg-red-100 rounded-t-[4rem] uppercase text-[1.8rem] py-16 text-center border-b-[1px] border-gray-100">
        Populiariausias
      </p>
    )
  }}
  <div
    class:list={{
      "pt-16 px-32 pb-32": isMostPopular,
    }}
  >
    <p class="text-large mb-8">{time}</p>
    <h2 class="text-h2">{price}</h2>
    <p class="text-medium">VIP narystė</p>
    <div class="line mb-24 h-[0.5px]"></div>
    <div class="flex items-center mb-16">
      <img
        src="/assets/media/checkmark.png"
        alt="checkmark"
        width="22"
        height="15"
        class="inline mr-16"
      />
      <p class="text-medium">Pilnai išanalizuoti statymai</p>
    </div>
    <div class="flex items-center mb-16">
      <img
        width="22"
        height="15"
        src="/assets/media/checkmark.png"
        alt="checkmark"
        class="mr-16"
      />
      <p class="text-medium">Klaidingos lažybų bendrovių linijos</p>
    </div>
    <div class="flex items-center mb-24">
      <img
        width="22"
        height="15"
        src="/assets/media/checkmark.png"
        alt="checkmark"
        class="mr-16"
      />
      <p class="text-medium">Pagalba klientams 24/7</p>
    </div>
    <p class="text-medium mb-64">
      {subtext}
    </p>
    <Button
      id={price}
      classList="w-full"
      isEmpty="!isMostPopular"
      text="Įsigyti narystę"
    />
  </div>
</div>
</template>

<script setup lang="ts">
defineProps({
	  time: {
	type: String,
	required: true,
  },
  price: {
	type: String,
	required: true,
  },
  subtext: {
	type: String,
	required: true,
  },
  isMostPopular: {
	type: Boolean,
	required: true,
  },
})

</script>
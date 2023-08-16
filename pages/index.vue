<template>
  <div class="top-page">
    <BasicLoading v-show="isLoading" />
    <div class="title-area">
      <div class="title-area-top">
        <img src="@/assets/img/rocket.png" alt="rocket" />
        <h1>フリーランススタート</h1>
      </div>
      <p class="title-area-num">
        案件・求人数{{ totalCount }}件 ({{ updatedDate }}更新)
      </p>
      <p>フリーランスエンジニア専用のIT求人・案件検索サイトで仕事探し</p>
    </div>
    <div class="search-area">
      <h2>フリーワードで案件検索</h2>
      <div class="search-area-box">
        <BasicInput
          type="email"
          name="email"
          :value="searchText"
          @inputValue="handleInput($event)"
          class="search-area-input"
          placeholder="キーワードを入れて探す"
        />
        <SearchButton
          text="案件を検索"
          class="search-area-button"
          @clickSubmit="handleClickSubmit"
        />
      </div>
    </div>
    <div class="recommend-area">
      <h2>おすすめキーワードで探す</h2>
      <div class="recommend-area-key">
        <div class="buttons">
          <TagButton
            v-for="(keyword, key) in keywords"
            :key="key"
            :text="keyword.name"
          />
        </div>
      </div>
    </div>
    <div class="detail-area">
      <h2>開発言語・環境でフリーランス求人・案件を探す</h2>
      <div class="detail-area-language">
        <h3>開発言語</h3>
        <div class="buttons">
          <TagButton
            v-for="(develop, key) in languages.develops"
            :key="key"
            :text="develop.name"
          />
        </div>
        <h3>フレームワーク</h3>
        <div class="buttons">
          <TagButton
            v-for="(framework, key) in languages.frameworks"
            :key="key"
            :text="framework.name"
          />
        </div>
        <h3>インフラ</h3>
        <div class="buttons">
          <TagButton
            v-for="(infrastructure, key) in languages.infrastructures"
            :key="key"
            :text="infrastructure.name"
          />
        </div>
        <h3>デザイン</h3>
        <div class="buttons">
          <TagButton
            v-for="(design, key) in languages.designs"
            :key="key"
            :text="design.name"
          />
        </div>
        <h3>その他</h3>
        <div class="buttons">
          <TagButton
            v-for="(other, key) in languages.others"
            :key="key"
            :text="other.name"
          />
        </div>
      </div>
    </div>
    <div class="detail-area">
      <h2>勤務地でフリーランス求人・案件を探す</h2>
      <div class="detail-area-language">
        <template v-for="area in areas" :key="area">
          <h3>{{ area }}</h3>
          <div class="buttons">
            <TagButton
              v-for="prefecture in getPrefecturesByArea(area)"
              :key="prefecture.name"
              :text="prefecture.name"
            />
          </div>
        </template>
        <!-- <h3>北海道</h3>
        <div class="buttons">
          <template v-for="(prefecture, key) in prefectures" :key="key">
            <TagButton
              v-if="prefecture.area === '北海道'"
              :text="prefecture.name"
            />
          </template>
        </div>
        <h3>東北</h3>
        <div class="buttons">
          <template v-for="(prefecture, key) in prefectures" :key="key">
            <TagButton
              v-if="prefecture.area === '東北'"
              :text="prefecture.name"
            />
          </template>
        </div>
        <h3>関東</h3>
        <div class="buttons">
          <template v-for="(prefecture, key) in prefectures" :key="key">
            <TagButton
              v-if="prefecture.area === '関東'"
              :text="prefecture.name"
            />
          </template>
        </div>
        <h3>中部</h3>
        <div class="buttons">
          <template v-for="(prefecture, key) in prefectures" :key="key">
            <TagButton
              v-if="prefecture.area === '北海道'"
              :text="prefecture.name"
            />
          </template>
        </div>
        <h3>近畿</h3>
        <div class="buttons">
          <template v-for="(prefecture, key) in prefectures" :key="key">
            <TagButton
              v-if="prefecture.area === '近畿'"
              :text="prefecture.name"
            />
          </template>
        </div>
        <h3>中国</h3>
        <div class="buttons">
          <template v-for="(prefecture, key) in prefectures" :key="key">
            <TagButton
              v-if="prefecture.area === '中国'"
              :text="prefecture.name"
            />
          </template>
        </div>
        <h3>四国</h3>
        <div class="buttons">
          <template v-for="(prefecture, key) in prefectures" :key="key">
            <TagButton
              v-if="prefecture.area === '四国'"
              :text="prefecture.name"
            />
          </template>
        </div>
        <h3>九州</h3>
        <div class="buttons">
          <template v-for="(prefecture, key) in prefectures" :key="key">
            <TagButton
              v-if="prefecture.area === '九州'"
              :text="prefecture.name"
            />
          </template>
        </div>
        <h3>沖縄</h3>
        <div class="buttons">
          <template v-for="(prefecture, key) in prefectures" :key="key">
            <TagButton
              v-if="prefecture.area === '沖縄'"
              :text="prefecture.name"
            />
          </template>
        </div> -->
      </div>
    </div>
    <div class="new-area">
      <h2>新着フリーランス求人・案件</h2>
      <div class="new-list">
        <BasicCard
          v-for="(matter, key) in matters"
          :key="key"
          :title="matter.title"
          :unit_price="matter.unit_price"
          :contract="matter.contract"
          :area="matter.area"
          :language="matter.language"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BasicInput } from "@/components/atoms/Inputs";
import { SearchButton, TagButton } from "@/components/atoms/Buttons";
import { BasicCard } from "@/components/atoms/Cards";
import { BasicLoading } from "@/components/atoms/Loadings";
import {
  getTotalCount,
  getKeyword,
  getProgrammingLanguage,
  getPrefecture,
  getMatters,
} from "@/api/matters";
import { Languages, Keywords, Prefectures, Matters } from "@/types/matter";
import { ref } from "vue";

const dayjs = useDayjs();

const searchText = ref("");
const handleInput = (data: { name: "text"; value: string }) => {
  searchText.value = data.value;
};
const handleClickSubmit = async () => {
  console.log(searchText.value);
};

const totalCount = ref(0);
const updatedDate = ref("");

const languages: Languages = reactive({
  develops: [],
  frameworks: [],
  infrastructures: [],
  designs: [],
  others: [],
});
const isLoading = ref(false);
const prefectures: Ref<Prefectures[]> = ref([]);
const keywords: Ref<Keywords[]> = ref([]);
const areas: Ref<string[]> = ref([]);
const matters: Ref<Matters[]> = ref([]);
const getPrefecturesByArea = (area: string) => {
  return prefectures.value.filter((prefecture) => prefecture.area === area);
};
(async () => {
  try {
    isLoading.value = true;
    const countData = await getTotalCount();
    totalCount.value = countData.total_count;
    updatedDate.value = dayjs(countData.date).format("YYYY/MM/DD");
    const programmingLanguageData = await getProgrammingLanguage();
    languages.develops = programmingLanguageData.develops;
    languages.frameworks = programmingLanguageData.frameworks;
    languages.infrastructures = programmingLanguageData.infrastructures;
    languages.designs = programmingLanguageData.designs;
    languages.others = programmingLanguageData.others;
    prefectures.value = await getPrefecture();
    areas.value = Array.from(
      new Set(prefectures.value.map((prefecture) => prefecture.area))
    );
    keywords.value = await getKeyword();
    matters.value = await getMatters();
  } catch {
    alert("error");
  } finally {
    isLoading.value = false;
  }
})();
</script>

<style lang="scss">
.top-page {
  padding: 0 100px;
}
.title-area {
  text-align: center;
  padding: 30px 0;
  font-weight: bold;
  &-top {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    img {
      width: 32px;
      height: 32px;
    }
  }
  &-num {
    padding: 20px;
    font-size: 12px;
  }
}

.search-area {
  padding: 30px 0;
  &-box {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 20px;
  }
  &-input {
    width: 80%;
  }
  &-button {
    width: 20%;
  }
}
.recommend-area {
  padding: 30px 0;
  &-key {
    display: flex;
    gap: 20px;
    padding: 20px 0;
  }
}
.detail-area {
  padding: 30px 0;
  &-language {
    padding: 20px 0;
  }
}
.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}
h2 {
  font-size: 24px;
}
h3 {
  font-size: 20px;
}
.new-area {
  padding: 30px 0;
}
.new-list {
  padding: 20px 0;
  display: flex;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
}
</style>

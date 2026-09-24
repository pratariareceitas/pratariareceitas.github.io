// Array global onde as receitas vão ser guardadas
let recipes = [];

// Mapeamento de categorias da API para o teu site em Português
const categoryMapping = {
    "Beef": { category: "principais", tag: "Carnes" },
    "Chicken": { category: "principais", tag: "Aves" },
    "Dessert": { category: "doces", tag: "Doces e Sobremesas" },
    "Lamb": { category: "principais", tag: "Carnes" },
    "Miscellaneous": { category: "lanches", tag: "Diversos" },
    "Pasta": { category: "massas", tag: "Massas" },
    "Pork": { category: "principais", tag: "Carne de Porco" },
    "Seafood": { category: "principais", tag: "Peixes e Mariscos" },
    "Side": { category: "entradas", tag: "Acompanhamentos" },
    "Starter": { category: "entradas", tag: "Entradas e Sopas" },
    "Vegan": { category: "principais", tag: "Vegetariano / Vegan" },
    "Vegetarian": { category: "principais", tag: "Vegetariano" },
    "Breakfast": { category: "lanches", tag: "Pequeno-almoço" },
    "Goat": { category: "principais", tag: "Carnes" }
};

// Função para extrair os ingredientes formatados da API
function extractIngredients(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            const text = measure && measure.trim() !== "" ? `${measure.trim()} de ${ingredient.trim()}` : ingredient.trim();
            ingredients.push(text);
        }
    }
    return ingredients;
}

// Função para formatar as instruções em passos
function extractInstructions(instructionsText) {
    if (!instructionsText) return ["Siga o modo de preparação tradicional."];
    return instructionsText
        .split(/\r?\n|\./)
        .map(step => step.trim())
        .filter(step => step.length > 5);
}

// Função principal para carregar centenas de receitas da API pública
async function loadRecipesFromAPI() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'v', 'w'];
    const allMeals = [];

    // Fazer pedidos à API para várias letras do alfabeto para obter centenas de receitas
    for (const letter of letters) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
            const data = await response.json();
            if (data.meals) {
                allMeals.push(...data.meals);
            }
        } catch (error) {
            console.error(`Erro ao carregar receitas com a letra ${letter}:`, error);
        }
    }

    // Converter as receitas obtidas para o formato do teu site
    recipes = allMeals.map((meal, index) => {
        const mappedCat = categoryMapping[meal.strCategory] || { category: "principais", tag: meal.strCategory || "Geral" };
        return {
            id: meal.idMeal || index + 1,
            title: meal.strMeal,
            category: mappedCat.category,
            tag: mappedCat.tag,
            image: meal.strMealThumb,
            desc: `Deliciosa receita de ${meal.strMeal} (${mappedCat.tag}).`,
            ingredients: extractIngredients(meal),
            prep: extractInstructions(meal.strInstructions),
            tip: "Servir quente e desfrutar!"
        };
    });

    console.log(`Carregadas ${recipes.length} receitas com sucesso!`);

    // Atualiza a apresentação no site
    if (typeof renderRecipes === 'function') {
        renderRecipes(recipes);
    } else if (typeof displayRecipes === 'function') {
        displayRecipes(recipes);
    } else if (typeof mostrarReceitas === 'function') {
        mostrarReceitas(recipes);
    } else {
        window.dispatchEvent(new CustomEvent('recipesLoaded', { detail: recipes }));
    }
}

// Iniciar o carregamento assim que o ficheiro for executado
loadRecipesFromAPI();

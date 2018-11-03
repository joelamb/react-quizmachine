import React from 'react';

const Options = ({ handleSubmit }) => {
  const categories = [
    {
      id: 9,
      category: "General Knowledge",
    },
    {
      id: 12,
      category: "Music",
    },
    {
      id: 17,
      category: "Science & Nature"
    },
    {
      id: 20,
      category: "Mythology",
    },
    {
      id: 27,
      category: "Animals",
    }
  ]

  const levels = ["easy", "medium", "hard"];

  let currentLevel = "medium";
  let currentCategoryID = "9"

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log(handleSubmit);
      console.log('Category', e.target.categorySelect.value);
      console.log('Difficulty', e.target.difficultySelect.value);
      handleSubmit(e.target.categorySelect.value, e.target.difficultySelect.value);
    }}>
      <fieldset>
        <legend>Select a category</legend>
        {categories.map(item => {
          const { id, category } = item;
          return <div key={id}>
            <input type="radio" name="categorySelect" id={category} value={id} />
            <label htmlFor={category}>{category}</label>
          </div>
        })}
      </fieldset>

      <fieldset>
        <legend>Select a difficulty level</legend>
        {levels.map(item => {
          return <div key={item}>
            <input type="radio" name="difficultySelect" id={item} value={item} defaultChecked={item == currentLevel ? true : false} />
            <label htmlFor={item}>{item}</label>
          </div>
        })}
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Options;
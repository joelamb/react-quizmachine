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

  const difficulties = ["easy", "medium", "hard"];
  const initialId = categories[0].id;
  const initialDifficulty = difficulties[0];

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(e.target.categorySelect.value, e.target.difficultySelect.value);
    }}>
      <fieldset>
        <legend>Select a category</legend>
        {categories.map(item => {
          const { id, category } = item;
          return <div key={id}>
            <input
              type="radio"
              name="categorySelect"
              id={category}
              value={id}
              defaultChecked={id == initialId ? true : false} />
            <label htmlFor={category}>{category}</label>
          </div>
        })}
      </fieldset>

      <fieldset>
        <legend>Select a difficulty level</legend>
        {difficulties.map(item => {
          return <div key={item}>
            <input type="radio" name="difficultySelect" id={item} value={item} defaultChecked={item == initialDifficulty ? true : false} />
            <label htmlFor={item}>{item}</label>
          </div>
        })}
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Options;
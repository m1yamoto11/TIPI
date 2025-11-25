import React, { useState } from 'react';
import './MemeGenerator.css';

const MemeGenerator = () => {
  const memeTemplates = [
    {
      id: 1,
      name: 'Drake',
      url: 'https://i.imgflip.com/30b1gx.jpg'
    },
    {
      id: 2,
      name: 'Distracted Boyfriend',
      url: 'https://i.imgflip.com/1ur9b0.jpg'
    },
    {
      id: 3,
      name: 'Change My Mind',
      url: 'https://i.imgflip.com/24y43o.jpg'
    },
    {
      id: 4,
      name: 'This Is Fine',
      url: 'https://i.imgflip.com/26am.jpg'
    }
  ];

  const [selectedTemplate, setSelectedTemplate] = useState(memeTemplates[0]);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  return (
    <div className="meme-generator">
      <h1>Генератор мемов</h1>
      
      <div className="meme-controls">
        <div className="template-selector">
          <h3>Выберите шаблон:</h3>
          <div className="template-grid">
            {memeTemplates.map(template => (
              <div
                key={template.id}
                className={`template-item ${selectedTemplate.id === template.id ? 'selected' : ''}`}
                onClick={() => setSelectedTemplate(template)}
              >
                <img src={template.url} alt={template.name} />
                <span>{template.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-inputs">
          <input
            type="text"
            placeholder="Верхний текст"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
          />
          <input
            type="text"
            placeholder="Нижний текст"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
          />
        </div>
      </div>

      <div className="meme-preview">
        <div className="meme-container">
          <img src={selectedTemplate.url} alt={selectedTemplate.name} />
          <div className="meme-text top-text">{topText}</div>
          <div className="meme-text bottom-text">{bottomText}</div>
        </div>
      </div>
    </div>
  );
};

export default MemeGenerator;
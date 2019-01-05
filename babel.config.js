const presets = [
  [
    '@babel/preset-env',
    {
      targets:
        '>0.25% in JP, ie 11,not op_mini all,chrome 41,last 3 Firefox versions, not iOS < 9, not dead',
      useBuiltIns: 'usage'
    }
  ]
];

module.exports = { presets };

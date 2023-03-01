define({
    'name' : 'Markdown',
    'sub-menu' : [
        {
            'name' : 'Documentation',
            'external-link' : 'https://help.github.com/articles/github-flavored-markdown/',
        },
        '---',
        
        {
            'name' : 'Insert itemized list',
            'snippet'  : [
                '* One',
                '    - Sublist',
                '        - This',
                '  - Sublist',
                '        - That',
                '        - The other thing',
                '* Two',
                '  - Sublist',
                '* Three',
                '  - Sublist',
            ],
        },

        {
            'name' : 'Insert enumerated list',
            'snippet'  : [
                '1. Here we go',
                '    1. Sublist',
                '    2. Sublist',
                '2. There we go',
                '3. Now this',
            ],
        },

        {
            'name' : 'Insert table',
            'snippet'  : [
                '<table>',
                '  <tr>',
                '    <th>Header 1</th>',
                '    <th>Header 2</th>',
                '  </tr>',
                '  <tr>',
                '    <td>row 1, cell 1</td>',
                '    <td>row 1, cell 2</td>',
                '  </tr>',
                '  <tr>',
                '    <td>row 2, cell 1</td>',
                '    <td>row 2, cell 2</td>',
                '  </tr>',
                '</table>',
            ],
        },

        {
            'name' : 'Insert local image',
            'snippet'  : [
                '<img src="image_file_in_this_directory.svg" />',
            ],
        },
        

        {
            'name' : 'Insert local video',
            'snippet'  : [
                '<video controls src="video_file_in_this_directory.m4v" />',
            ],
        },

        {
            'name' : 'Insert remote image',
            'snippet'  : [
                '<img src="http://some.site.org/image.jpg" />',
            ],
        },

        {
            'name' : 'Insert remote video',
            'snippet'  : [
                '<video controls src="http://some.site.org/video.m4v" />',
            ],
        },

        {
            'name' : 'Insert inline math',
            'snippet' : ['$e^{i\\pi} + 1 = 0$',],
        },

        {
            'name' : 'Insert equation',
            'snippet'  : [
                '\\begin{equation}',
                '  e^x = \\sum_{j=0}^{\\infty} \\frac{1}{j!} x^j',
                '\\end{equation}',
            ],
        },

        {
            'name' : 'Insert aligned equation',
            'snippet'  : [
                '\\begin{align}',
                '  a &= b \\\\',
                '  c &= d \\\\',
                '  e &= f',
                '\\end{align}',
            ],
        },
        
        {'name' : 'SAGE WIDD',
        'sub-menu' : [ 
        
                {
            'name' : 'General Characteristics',
            'sub-menu' : [

        
        {
        'name' : 'Who collected the dataset?',
        'snippet' : ['#### Who collected the dataset and who funded the process?',],
        
        },
        
        {
        'name' : 'Where is the dataset hosted?',
     	'snippet' : ['#### Where is the dataset hosted? Is the dataset distributed under a copyright or license? ',]
        },
        
        {
        'name' : 'What do the instances that comprise the dataset represent?',
        'snippet' : ['#### What do the instances that comprise the dataset represent? What data does each instance consist of? ',]
        },
        
        {
        'name' : 'How many instances are there in total in each category?',
        'snippet' : ['#### How many instances are there in total in each category (as defined by the instances’ label), and - if applicable - in each recommended data split? ',]        
        

        },
        {
        'name' : 'In which contexts and publications has the dataset been used already?',
        'snippet' : ['#### In which contexts and publications has the dataset been used already?  ',]        
        

        },        

        {
        'name' : 'Are there alternative datasets that could be used? ',
        'snippet' : ['#### Are there alternative datasets that could be used for the measurement of the same or similar constructs? Could they be a better fit? How do they differ?  ',]        
       
        },
        {
        'name' : 'Can the dataset collection be readily reproduced? ',
        'snippet' : ['#### Can the dataset collection be readily reproduced given the current data access, the general context and other potentially interfering developments?  ',]        
       
        },
        
        
                ]},
                
                                {
            'name' : 'Construct Definition',
            'sub-menu' : [

        
        {
        'name' : 'For the measurement of what construct was the dataset created? ',
        'snippet' : ['#### For the measurement of what construct was the dataset created? ',],
        
        },
        
        {
        'name' : 'How is the construct operationalized?',
     	'snippet' : ['#### How is the construct operationalized? Can the dataset fully grasp the construct? If not, what dimensions are left out? Have there been any attempts to evaluate the validity of the construct\'s operationalization?  ',]
        },
        
        {
        'name' : 'What related constructs could (not) be measured through the dataset?',
        'snippet' : ['#### What related constructs could (not) be measured through the dataset? What should be considered when measuring other constructs with the dataset? ',]
        },
        
        {
        'name' : 'What is the target population? ',
        'snippet' : ['#### What is the target population?  ',]        
        

        },
               
                ]},
                
        ]},

    ],
});

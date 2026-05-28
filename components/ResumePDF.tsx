import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { resumeData } from '@/data/resume';

Font.register({
  family: 'Noto Sans SC',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-sc@5.0.3/files/noto-sans-sc-chinese-simplified-400-normal.woff2',
      fontWeight: 'normal',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-sc@5.0.3/files/noto-sans-sc-chinese-simplified-700-normal.woff2',
      fontWeight: 'bold',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Noto Sans SC',
  },
  header: {
    alignItems: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  title: {
    fontSize: 12,
    color: '#ea580c',
    marginTop: 2,
  },
  tagline: {
    fontSize: 10,
    color: '#6b7280',
    marginTop: 2,
  },
  contactRow: {
    flexDirection: 'row',
    marginTop: 6,
    justifyContent: 'center',
  },
  contactItem: {
    fontSize: 9,
    color: '#4b5563',
    marginHorizontal: 6,
  },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
    borderBottomWidth: 1,
    borderBottomColor: '#ea580c',
    paddingBottom: 2,
    marginBottom: 6,
  },
  text: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.3,
  },
  itemTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  itemSubtitle: {
    fontSize: 9,
    color: '#ea580c',
    marginTop: 1,
  },
  itemPeriod: {
    fontSize: 8,
    color: '#9ca3af',
    marginTop: 1,
  },
  itemDescription: {
    fontSize: 9,
    color: '#4b5563',
    marginTop: 2,
    lineHeight: 1.3,
  },
  tag: {
    fontSize: 8,
    backgroundColor: '#fff7ed',
    color: '#ea580c',
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderRadius: 3,
    marginRight: 3,
    marginTop: 2,
  },
  twoColumn: {
    flexDirection: 'row',
    gap: 20,
  },
  column: {
    flex: 1,
  },
});

export default function ResumePDF() {
  const { personalInfo, about, experiences, skillCategories, projects, contact } = resumeData;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.title}>{personalInfo.title}</Text>
          <Text style={styles.tagline}>{personalInfo.tagline}</Text>
          
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>{contact.email}</Text>
            {contact.phone && <Text style={styles.contactItem}>{contact.phone}</Text>}
            {contact.location && <Text style={styles.contactItem}>{contact.location}</Text>}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>关于我</Text>
          <Text style={styles.text}>{about}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>工作经历</Text>
          {experiences.map((exp, index) => (
            <View key={index} style={{ marginBottom: 6 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.itemTitle}>{exp.company}</Text>
                <Text style={styles.itemPeriod}>{exp.period}</Text>
              </View>
              <Text style={styles.itemSubtitle}>{exp.position}</Text>
              {exp.description.slice(0, 2).map((desc, i) => (
                <Text key={i} style={styles.itemDescription}>• {desc}</Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>技能</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {skillCategories.map((category, index) => (
              <View key={index} style={{ marginRight: 15, marginBottom: 4 }}>
                <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#374151' }}>
                  {category.category}:
                </Text>
                <Text style={{ fontSize: 9, color: '#4b5563' }}>
                  {category.skills.map(s => s.name).join(' / ')}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>项目经验</Text>
          {projects.slice(0, 2).map((project, index) => (
            <View key={index} style={{ marginBottom: 4 }}>
              <Text style={styles.itemTitle}>{project.name}</Text>
              <Text style={styles.itemDescription}>{project.description}</Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {project.technologies.map((tech, i) => (
                  <Text key={i} style={styles.tag}>{tech}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
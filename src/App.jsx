import React, { useState } from 'react';
import './social-dashboard_App.css';

const PLATFORMS = [
  { id: 'all', name: 'All Platforms', icon: '🌐' },
  { id: 'instagram', name: 'Instagram', icon: '📸' },
  { id: 'twitter', name: 'Twitter (X)', icon: '🐦' },
  { id: 'linkedin', name: 'LinkedIn', icon: '💼' },
];

const STATS_DATA = {
  all: { followers: '142,850', followersTrend: '+12.4%', engagement: '4.8%', engagementTrend: '+0.6%', posts: '482', postsTrend: '+18', reach: '890,200', reachTrend: '+24.5%' },
  instagram: { followers: '84,200', followersTrend: '+14.2%', engagement: '5.6%', engagementTrend: '+1.2%', posts: '210', postsTrend: '+8', reach: '420,000', reachTrend: '+28.1%' },
  twitter: { followers: '38,150', followersTrend: '+8.1%', engagement: '3.2%', engagementTrend: '-0.3%', posts: '195', postsTrend: '+6', reach: '290,200', reachTrend: '+15.4%' },
  linkedin: { followers: '20,500', followersTrend: '+15.8%', engagement: '5.1%', engagementTrend: '+1.1%', posts: '77', postsTrend: '+4', reach: '180,000', reachTrend: '+32.0%' },
};

const CHART_DATA = {
  all: [
    { day: 'Mon', value: 65, height: '65%' },
    { day: 'Tue', value: 80, height: '80%' },
    { day: 'Wed', value: 45, height: '45%' },
    { day: 'Thu', value: 95, height: '95%' },
    { day: 'Fri', value: 70, height: '70%' },
    { day: 'Sat', value: 110, height: '100%' },
    { day: 'Sun', value: 85, height: '85%' },
  ],
  instagram: [
    { day: 'Mon', value: 35, height: '50%' },
    { day: 'Tue', value: 45, height: '65%' },
    { day: 'Wed', value: 25, height: '35%' },
    { day: 'Thu', value: 55, height: '80%' },
    { day: 'Fri', value: 40, height: '60%' },
    { day: 'Sat', value: 70, height: '100%' },
    { day: 'Sun', value: 50, height: '72%' },
  ],
  twitter: [
    { day: 'Mon', value: 20, height: '60%' },
    { day: 'Tue', value: 25, height: '75%' },
    { day: 'Wed', value: 15, height: '45%' },
    { day: 'Thu', value: 28, height: '85%' },
    { day: 'Fri', value: 22, height: '68%' },
    { day: 'Sat', value: 25, height: '75%' },
    { day: 'Sun', value: 20, height: '60%' },
  ],
  linkedin: [
    { day: 'Mon', value: 10, height: '50%' },
    { day: 'Tue', value: 10, height: '50%' },
    { day: 'Wed', value: 5, height: '25%' },
    { day: 'Thu', value: 12, height: '60%' },
    { day: 'Fri', value: 8, height: '40%' },
    { day: 'Sat', value: 15, height: '75%' },
    { day: 'Sun', value: 15, height: '75%' },
  ],
};

const POSTS = [
  { id: 1, platform: 'instagram', title: '10 Essential React Tips for 2026', caption: 'Master modern hooks and performance patterns with these clean code snippets! 🚀', likes: '4.2k', comments: 184, shares: 320, rate: '7.8%' },
  { id: 2, platform: 'twitter', title: 'CSS Subgrid Complete Guide', caption: 'Why CSS Subgrid is going to change how you design complex responsive layouts forever. 🧵👇', likes: '2.8k', comments: 95, shares: 540, rate: '6.4%' },
  { id: 3, platform: 'linkedin', caption: 'Excited to announce our engineering team grew by 50% this quarter! Here are 3 key takeaways.', likes: '1.9k', comments: 142, shares: 88, rate: '8.2%' },
  { id: 4, platform: 'instagram', caption: 'Behind the scenes: Building our scalable design system with utility tokens ✨', likes: '3.1k', comments: 67, shares: 110, rate: '5.9%' },
];

const ACTIVITIES = [
  { id: 1, user: 'Sarah Chen', action: 'commented on Instagram post', detail: '"This tip saved me hours of debugging!"', time: '12m ago', icon: '💬' },
  { id: 2, user: 'Analytics Alert', action: 'reached new milestone', detail: 'Crossed 140,000 total audience across platforms!', time: '1h ago', icon: '🎯' },
  { id: 3, user: 'Alex Rivera', action: 'reposted LinkedIn article', detail: 'Shared "Scaling Micro-frontends" with 5,000+ connections', time: '3h ago', icon: '🔄' },
  { id: 4, user: 'DevCommunity', action: 'mentioned you on Twitter', detail: '"Check out this awesome dashboard architecture!"', time: '5h ago', icon: '📢' },
];

export default function App() {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const stats = STATS_DATA[selectedPlatform];
  const chart = CHART_DATA[selectedPlatform];

  const filteredPosts = POSTS.filter(post => {
    const matchesPlatform = selectedPlatform === 'all' || post.platform === selectedPlatform;
    const matchesSearch = post.caption.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPlatform && matchesSearch;
  });

  return (
    <div className="sd-dashboard-container">
      {/* Sidebar */}
      <aside className="sd-sidebar">
        <div className="sd-logo">
          <span className="sd-logo-icon">📊</span>
          <span className="sd-logo-text">PulseAnalytics</span>
        </div>
        <nav className="sd-nav">
          <button className={`sd-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
            <span>🏠</span> Dashboard
          </button>
          <button className={`sd-nav-item ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => setActiveTab('analytics')}>
            <span>📈</span> Analytics
          </button>
          <button className={`sd-nav-item ${activeTab === 'content' ? 'active' : ''}`} onClick={() => setActiveTab('content')}>
            <span>📝</span> Content
          </button>
          <button className={`sd-nav-item ${activeTab === 'audience' ? 'active' : ''}`} onClick={() => setActiveTab('audience')}>
            <span>👥</span> Audience
          </button>
        </nav>
        <div className="sd-user-profile">
          <div className="sd-avatar">JD</div>
          <div className="sd-user-info">
            <span className="sd-user-name">Jane Doe</span>
            <span className="sd-user-role">Growth Lead</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="sd-main">
        {/* Top Header */}
        <header className="sd-header">
          <div>
            <h1 className="sd-title">Social Dashboard</h1>
            <p className="sd-subtitle">Real-time overview of your cross-channel social metrics</p>
          </div>
          <div className="sd-header-actions">
            <input
              type="text"
              placeholder="Search posts..."
              className="sd-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="sd-btn-primary">+ Create Post</button>
          </div>
        </header>

        {/* Platform Tabs */}
        <div className="sd-tabs-bar">
          {PLATFORMS.map(p => (
            <button
              key={p.id}
              className={`sd-tab-btn ${selectedPlatform === p.id ? 'active' : ''}`}
              onClick={() => setSelectedPlatform(p.id)}
            >
              <span className="sd-tab-icon">{p.icon}</span>
              {p.name}
            </button>
          ))}
        </div>

        {/* Stat Cards */}
        <div className="sd-stats-grid">
          <div className="sd-stat-card">
            <div className="sd-stat-header">
              <span>Total Followers</span>
              <span className="sd-stat-badge positive">{stats.followersTrend}</span>
            </div>
            <div className="sd-stat-value">{stats.followers}</div>
            <div className="sd-stat-footer">Vs last 30 days</div>
          </div>

          <div className="sd-stat-card">
            <div className="sd-stat-header">
              <span>Avg. Engagement</span>
              <span className={`sd-stat-badge ${stats.engagementTrend.startsWith('+') ? 'positive' : 'negative'}`}>
                {stats.engagementTrend}
              </span>
            </div>
            <div className="sd-stat-value">{stats.engagement}</div>
            <div className="sd-stat-footer">Interaction rate per post</div>
          </div>

          <div className="sd-stat-card">
            <div className="sd-stat-header">
              <span>Total Posts Published</span>
              <span className="sd-stat-badge positive">{stats.postsTrend}</span>
            </div>
            <div className="sd-stat-value">{stats.posts}</div>
            <div className="sd-stat-footer">This month</div>
          </div>

          <div className="sd-stat-card">
            <div className="sd-stat-header">
              <span>Estimated Reach</span>
              <span className="sd-stat-badge positive">{stats.reachTrend}</span>
            </div>
            <div className="sd-stat-value">{stats.reach}</div>
            <div className="sd-stat-footer">Unique impressions</div>
          </div>
        </div>

        {/* Grid layout for Charts and Feed */}
        <div className="sd-content-grid">
          {/* Chart Section */}
          <div className="sd-card sd-chart-section">
            <div className="sd-card-header">
              <h3>Weekly Engagement Activity</h3>
              <span className="sd-subtext">Impressions in Thousands (k)</span>
            </div>
            <div className="sd-bar-chart">
              {chart.map((item, idx) => (
                <div key={idx} className="sd-bar-wrapper">
                  <div className="sd-bar-value">{item.value}k</div>
                  <div className="sd-bar-track">
                    <div className="sd-bar-fill" style={{ height: item.height }}></div>
                  </div>
                  <div className="sd-bar-label">{item.day}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="sd-card sd-activity-section">
            <div className="sd-card-header">
              <h3>Weekly Activity Feed</h3>
            </div>
            <div className="sd-activity-list">
              {ACTIVITIES.map(act => (
                <div key={act.id} className="sd-activity-item">
                  <span className="sd-act-icon">{act.icon}</span>
                  <div className="sd-act-details">
                    <p className="sd-act-text">
                      <strong>{act.user}</strong> {act.action}
                    </p>
                    <p className="sd-act-sub">{act.detail}</p>
                    <span className="sd-act-time">{act.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Posts Section */}
        <div className="sd-card sd-top-posts">
          <div className="sd-card-header">
            <h3>Top Performing Content</h3>
            <span className="sd-subtext">Sorted by overall engagement rate</span>
          </div>
          <div className="sd-posts-grid">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <div key={post.id} className="sd-post-card">
                  <div className="sd-post-header">
                    <span className={`sd-platform-tag ${post.platform}`}>
                      {post.platform.toUpperCase()}
                    </span>
                    <span className="sd-post-rate">{post.rate} Eng. Rate</span>
                  </div>
                  <p className="sd-post-caption">{post.caption}</p>
                  <div className="sd-post-metrics">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                    <span>🔁 {post.shares}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="sd-no-posts">No posts match your current filter query.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

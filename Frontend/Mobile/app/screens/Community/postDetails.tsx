import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import PagerView from "react-native-pager-view";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function PostDetails() {
  const route = useRoute();
  const { post } = route.params;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <View>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </View>
      ),
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <LinearGradient
        colors={["#28a745", "#1d8a3b"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerContainer}
      >
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.category}>{post.careerCategory}</Text>
      </LinearGradient>

      {/* Carousel Section */}
      <View style={styles.carouselContainer}>
        {post.images && post.images.length > 0 ? (
          <PagerView style={styles.pagerView} initialPage={0}>
            {post.images.map((image, index) => (
              <View key={index} style={styles.carouselItem}>
                <Image source={{ uri: image }} style={styles.carouselImage} />
              </View>
            ))}
          </PagerView>
        ) : (
          <Text style={styles.noImages}>No images available</Text>
        )}
        <View style={styles.carouselDots}>
          {post.images &&
            post.images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === 3 && styles.activeDot, // First dot is active initially
                ]}
              />
            ))}
        </View>
      </View>

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.content}>{post.content}</Text>
        <View style={styles.detailItem}>
          <Ionicons name="location-outline" size={20} color="#28a745" />
          <Text style={styles.detailText}>{post.location}</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="calendar-outline" size={20} color="#28a745" />
          <Text style={styles.detailText}>
            Posted on: {new Date(post.postDate).toLocaleDateString()}
          </Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="people-outline" size={20} color="#28a745" />
          <Text style={styles.detailText}>
            Workers Needed: {post.numberOfWorker}
          </Text>
        </View>
      </View>

      {/* Apply Button */}
      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => alert("Applied successfully!")}
      >
        <LinearGradient
          colors={["#28a745", "#1d8a3b"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientButton}
        >
          <Text style={styles.applyButtonText}>Apply for this Job</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    padding: 24,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  category: {
    fontSize: 18,
    color: "#e0e0e0",
    marginTop: 4,
  },
  carouselContainer: {
    marginTop: 20,
  },
  pagerView: {
    width: SCREEN_WIDTH,
    height: 250,
  },
  carouselItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  carouselImage: {
    width: SCREEN_WIDTH - 40,
    height: 250,
    borderRadius: 15,
  },
  carouselDots: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: "#d3d3d3",
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#28a745",
  },
  detailsContainer: {
    padding: 16,
    marginHorizontal: 16,
    marginTop: 20,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  content: {
    fontSize: 16,
    marginBottom: 16,
    color: "#333333",
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  detailText: {
    fontSize: 14,
    color: "#333333",
    marginLeft: 8,
  },
  noImages: {
    fontSize: 14,
    color: "#adb5bd",
    textAlign: "center",
    marginTop: 16,
  },
  applyButton: {
    marginHorizontal: 16,
    marginVertical: 20,
    borderRadius: 25,
    overflow: "hidden",
    elevation: 5,
  },
  gradientButton: {
    paddingVertical: 16,
    alignItems: "center",
  },
  applyButtonText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },
});
